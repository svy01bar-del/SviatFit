#!/usr/bin/env python3
"""Materialize the self-contained Pflege learning app and platform sources."""
import argparse, json, pathlib, shutil, zipfile, xml.etree.ElementTree as ET

SOURCE=pathlib.Path(__file__).parent/"source"
FILES={str(p.relative_to(SOURCE)):p.read_text(encoding="utf-8") for p in SOURCE.rglob("*") if p.is_file() and "__pycache__" not in p.parts}

def build(destination):
    out=pathlib.Path(destination).resolve()
    out.mkdir(parents=True,exist_ok=True)
    for name,content in FILES.items():
        target=out/name
        target.parent.mkdir(parents=True,exist_ok=True)
        target.write_text(content,encoding="utf-8")
    for name in FILES:
        if name.endswith(".xml"):
            ET.fromstring(FILES[name])
    code=FILES["web/course-data.js"].replace("</script>","<\\/script>")
    html=FILES["web/index.html"].replace('<script src="course-data.js"></script>',"<script>"+code+"</script>")
    desktop=out/"desktop"
    desktop.mkdir(exist_ok=True)
    (desktop/"index.html").write_text(html,encoding="utf-8")
    (desktop/"Start_Pflege.cmd").write_text('@echo off\r\nstart "" "%~dp0index.html"\r\n',encoding="ascii")
    (desktop/"START_HERE.txt").write_text("Sviat Pflege Deutsch 1.1\n\n1. Unzip the archive.\n2. Open Start_Pflege.cmd or index.html in Edge/Chrome.\n3. The course works offline. Import 1.0 JSON backups in Settings. Export a backup before moving to another folder.\n\nAndroid PDF OCR and arbitrary offline translation are available in the APK.\n",encoding="utf-8")
    (desktop/"README_UA.md").write_text(FILES["README.md"],encoding="utf-8")
    assets=out/"android/app/src/main/assets"
    assets.mkdir(parents=True,exist_ok=True)
    (assets/"index.html").write_text(html,encoding="utf-8")
    artifacts=out/"artifacts"
    artifacts.mkdir(exist_ok=True)
    with zipfile.ZipFile(artifacts/"Sviat_Pflege_Windows_1.1.zip","w",zipfile.ZIP_DEFLATED) as archive:
        for file in sorted(desktop.iterdir()):
            archive.write(file,file.name)
    with zipfile.ZipFile(artifacts/"Sviat_Pflege_Source_1.1.zip","w",zipfile.ZIP_DEFLATED) as archive:
        archive.write(pathlib.Path(__file__),"pflege/build.py")
        for name in FILES:
            archive.write(out/name,"pflege/source/"+name)
    print(json.dumps({"output":str(out),"source_files":len(FILES),"standalone_bytes":len(html.encode("utf-8"))},ensure_ascii=False))

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--out",default="pflege/generated")
    args=parser.parse_args()
    build(args.out)
