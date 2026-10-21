#!/usr/bin/env python3
"""Generate bundled German speech once, then package both offline applications."""
import argparse, concurrent.futures, hashlib, json, os, pathlib, shutil, subprocess, urllib.request, wave, zipfile
from piper import PiperVoice

parser=argparse.ArgumentParser()
parser.add_argument("--root",required=True)
args=parser.parse_args()
root=pathlib.Path(args.root).resolve()
project=root.parent
cache=project/"piper-cache";cache.mkdir(exist_ok=True)
audio=project/"audio-cache";audio.mkdir(exist_ok=True)
base="https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/de/de_DE/thorsten/medium/"
model=cache/"de_DE-thorsten-medium.onnx"
for name in ["de_DE-thorsten-medium.onnx","de_DE-thorsten-medium.onnx.json","MODEL_CARD"]:
    file=cache/name
    if not file.exists():
        urllib.request.urlretrieve(base+name,file)
if model.stat().st_size<10000000:raise RuntimeError("Voice model download is invalid")
voice=PiperVoice.load(str(model))
datajs=(root/"web/course-data.js").read_text("utf-8")
data=json.loads(datajs.removeprefix("window.PFLEGE_DATA=").strip().removesuffix(";"))
texts=set(data["dictionary"].keys())
for case in data.get("examCases",[]):
    texts.update([case["text"],case["model"]])
for unit in data.get("curriculum",[]):
    texts.add(unit[2])
for module in data["modules"]:
    texts.update([module["reading"],module["model"]," … ".join(row[1] for row in module["dialogue"])])
    texts.update(row[1] for row in module["dialogue"])
    texts.update(row[0] for row in module["phrases"])
    for row in module["vocab"]:texts.update([row[0],row[2]])
    gap=module["gapText"]
    for item in module["gaps"]:gap=gap.replace("{{"+str(item["n"])+"}}",item["options"][item["answer"]])
    texts.add(gap)
texts=sorted(texts)
mapping={}
pending=[]
for index,text in enumerate(texts):
    name=hashlib.sha256(("thorsten-medium-v1:"+text).encode()).hexdigest()[:24]+".mp3"
    mapping[text]=name
    mp3=audio/name
    if not mp3.exists() or mp3.stat().st_size<500:
        wav=audio/(name+".wav")
        with wave.open(str(wav),"wb") as wav_file:voice.synthesize_wav(text,wav_file)
        pending.append((wav,mp3))
    if index%100==0:print("Synthesized",index,"of",len(texts),flush=True)
def encode(pair):
    wav,mp3=pair
    subprocess.run(["ffmpeg","-loglevel","error","-y","-i",str(wav),"-codec:a","libmp3lame","-b:a","48k",str(mp3)],check=True)
    wav.unlink()
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(encode,pending))
for dest in [root/"desktop",root/"android/app/src/main/assets"]:
    folder=dest/"audio";folder.mkdir(exist_ok=True)
    for name in set(mapping.values()):shutil.copy2(audio/name,folder/name)
    html=(dest/"index.html").read_text("utf-8")
    inline="<script>window.PFLEGE_AUDIO_MAP="+json.dumps(mapping,ensure_ascii=False,separators=(",",":"))+";</script>"
    if "<!--PFLEGE_AUDIO_MAP-->" not in html:raise RuntimeError("Audio insertion point missing")
    (dest/"index.html").write_text(html.replace("<!--PFLEGE_AUDIO_MAP-->",inline),encoding="utf-8")
    (dest/"VOICE_CREDITS.txt").write_text("Speech synthesized with Piper.\nThorsten Voice dataset: CC0\nhttps://github.com/thorstenMueller/Thorsten-Voice\nModel: de_DE-thorsten-medium, rhasspy/piper-voices v1.0.0\n\n"+(cache/"MODEL_CARD").read_text("utf-8"),encoding="utf-8")
with zipfile.ZipFile(root/"artifacts/Sviat_Pflege_Windows_1.1.zip","w",zipfile.ZIP_DEFLATED) as archive:
    for file in sorted((root/"desktop").rglob("*")):
        if file.is_file():archive.write(file,str(file.relative_to(root/"desktop")))
(root/"audio-report.json").write_text(json.dumps({"clips":len(mapping),"mp3_bytes":sum((audio/n).stat().st_size for n in set(mapping.values())),"voice":"de_DE-thorsten-medium","voice_dataset_license":"CC0"},indent=2),encoding="utf-8")
print((root/"audio-report.json").read_text(),flush=True)
