from pathlib import Path

p = Path("app/src/main/java/com/sviat/fit/MainActivity.java")
s = p.read_text(encoding="utf-8")

marker = '        if ("full_flow".equals(action)) {'
block = '''        if ("vitamins".equals(action)) {
            view.evaluateJavascript(
                    "(function(){var b=document.querySelector('[data-tab=\\\"vitamins\\\"]');if(!b)return 'NO_TAB';b.click();var d=document.getElementById('suppDone-zma-vplab');var c=document.querySelector('.supplement-card');if(!d||!c)return 'NO_CARD';var r=d.getBoundingClientRect();return 'w='+Math.round(r.width)+',h='+Math.round(r.height)+',text='+d.innerText+',card='+c.getAttribute('data-supp');})()",
                    value -> {
                        Log.i("SviatQA", "VITAMINS=" + value);
                        view.postDelayed(() -> view.evaluateJavascript(
                                "(function(){var d=document.getElementById('suppDone-zma-vplab');if(!d)return 'NO_DONE';d.click();var st=document.querySelector('.supplement-status');return 'button='+(document.getElementById('suppDone-zma-vplab')||{}).innerText+',status='+(st?st.innerText:'');})()",
                                done -> Log.i("SviatQA", "VITAMINS_DONE=" + done)
                        ), 500L);
                    }
            );
            return;
        }

'''
if marker not in s:
    raise SystemExit("QA full_flow marker not found")
s = s.replace(marker, block + marker, 1)

p.write_text(s, encoding="utf-8")
print("Added SviatFit 1.6.4 vitamins QA action")
