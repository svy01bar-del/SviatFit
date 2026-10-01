from pathlib import Path

p = Path("app/src/main/java/com/sviat/fit/MainActivity.java")
s = p.read_text(encoding="utf-8")

s = s.replace(
    "import android.content.pm.PackageManager;\nimport android.graphics.Color;",
    "import android.content.pm.PackageManager;\nimport android.content.pm.ApplicationInfo;\nimport android.graphics.Color;\nimport android.graphics.Typeface;\nimport android.util.Log;"
)
s = s.replace(
    "import android.view.Window;\nimport android.webkit.JavascriptInterface;",
    "import android.view.Window;\nimport android.view.Gravity;\nimport android.view.View;\nimport android.webkit.JavascriptInterface;"
)
s = s.replace(
    "import android.widget.Toast;",
    "import android.widget.Toast;\nimport android.widget.FrameLayout;\nimport android.widget.LinearLayout;\nimport android.widget.ProgressBar;\nimport android.widget.TextView;"
)

s = s.replace(
    "    private WebView webView;\n    private ValueCallback<Uri[]> filePathCallback;",
    "    private WebView webView;\n    private View loadingView;\n    private ValueCallback<Uri[]> filePathCallback;"
)

old_root = """        webView = new WebView(this);
        setContentView(webView);

        WebSettings settings = webView.getSettings();"""
new_root = """        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(12, 15, 20));

        webView = new WebView(this);
        webView.setVisibility(View.INVISIBLE);
        root.addView(webView, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
        ));

        LinearLayout splash = new LinearLayout(this);
        splash.setOrientation(LinearLayout.VERTICAL);
        splash.setGravity(Gravity.CENTER);
        splash.setPadding(48, 48, 48, 48);
        splash.setBackgroundColor(Color.rgb(12, 15, 20));

        TextView title = new TextView(this);
        title.setText("SviatFit");
        title.setTextColor(Color.rgb(244, 247, 251));
        title.setTextSize(30);
        title.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        title.setGravity(Gravity.CENTER);
        splash.addView(title, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
        ));

        ProgressBar progress = new ProgressBar(this);
        LinearLayout.LayoutParams progressParams = new LinearLayout.LayoutParams(72, 72);
        progressParams.topMargin = 28;
        splash.addView(progress, progressParams);

        TextView loading = new TextView(this);
        loading.setText("Завантаження тренувань…");
        loading.setTextColor(Color.rgb(143, 152, 168));
        loading.setTextSize(15);
        loading.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams loadingParams = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
        );
        loadingParams.topMargin = 18;
        splash.addView(loading, loadingParams);

        loadingView = splash;
        root.addView(splash, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
        ));
        setContentView(root);

        WebSettings settings = webView.getSettings();"""
if old_root not in s:
    raise SystemExit("MainActivity root setup not found")
s = s.replace(old_root, new_root, 1)

old_client = "        webView.setBackgroundColor(Color.rgb(12, 15, 20));\n        webView.setWebViewClient(new WebViewClient());"
new_client = """        webView.setBackgroundColor(Color.rgb(12, 15, 20));
        webView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_YES);
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                webView.setVisibility(View.VISIBLE);
                if (loadingView != null) loadingView.setVisibility(View.GONE);
                Log.i("SviatFitWeb", "PAGE_FINISHED " + url);
                runQaAction(view);
            }
        });"""
if old_client not in s:
    raise SystemExit("WebViewClient setup not found")
s = s.replace(old_client, new_client, 1)

marker = "    private void startTimerService(Intent intent) {"
method = r"""    private boolean isDebuggableBuild() {
        return (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
    }

    private void runQaAction(WebView view) {
        if (!isDebuggableBuild()) return;
        String action = getIntent() != null ? getIntent().getStringExtra("sviat_qa_action") : null;
        if (action == null || action.isEmpty()) return;

        if ("full_flow".equals(action)) {
            view.evaluateJavascript(
                    "(function(){var b=document.querySelector('.template-start');if(!b)return 'NO_START';var r=b.getBoundingClientRect();var out='w='+Math.round(r.width)+',h='+Math.round(r.height)+',text='+b.innerText;b.click();return out;})()",
                    value -> {
                        Log.i("SviatQA", "HOME_START=" + value);
                        view.postDelayed(() -> view.evaluateJavascript(
                                "(function(){var f=document.getElementById('finishExerciseAction');var n=document.querySelector('.exercise-item.current .exercise-titleline');if(!f)return 'NO_FINISH';var r=f.getBoundingClientRect();return 'w='+Math.round(r.width)+',h='+Math.round(r.height)+',exercise='+(n?n.innerText:'')+',finish='+f.innerText;})()",
                                workout -> {
                                    Log.i("SviatQA", "WORKOUT=" + workout);
                                    view.evaluateJavascript(
                                            "(function(){var f=document.getElementById('finishExerciseAction');if(!f)return 'NO_FINISH';f.click();return 'FINISH_CLICKED';})()",
                                            clicked -> {
                                                Log.i("SviatQA", "FINISH_CLICK=" + clicked);
                                                view.postDelayed(() -> view.evaluateJavascript(
                                                        "(function(){var f=document.getElementById('finishExerciseAction');var n=document.querySelector('.exercise-item.current .exercise-titleline');var done=document.querySelectorAll('.exercise-item.done').length;return 'done='+done+',exercise='+(n?n.innerText:'')+',finish='+(f?f.innerText:'');})()",
                                                        done -> Log.i("SviatQA", "FLOW_DONE=" + done)
                                                ), 500L);
                                            }
                                    );
                                }
                        ), 900L);
                    }
            );
        }
    }

"""
if marker not in s:
    raise SystemExit("startTimerService marker not found")
s = s.replace(marker, method + marker, 1)

p.write_text(s, encoding="utf-8")
print("Applied native loading screen and debug QA hook")
