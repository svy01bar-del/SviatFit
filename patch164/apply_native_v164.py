from pathlib import Path

p = Path("app/src/main/java/com/sviat/fit/MainActivity.java")
s = p.read_text(encoding="utf-8")

s = s.replace(
    'Toast.makeText(this, "Таймер на екрані блокування потребує дозволу на сповіщення", Toast.LENGTH_LONG).show();',
    'Toast.makeText(this, "Сповіщення SviatFit потребують дозволу", Toast.LENGTH_LONG).show();'
)

marker = "        @JavascriptInterface\n        public void clearTimerSound() {"
insert = r'''        @JavascriptInterface
        public void scheduleSupplementReminder(String name, int hour, int minute) {
            SupplementReminderReceiver.schedule(context, name, hour, minute);
            if (Build.VERSION.SDK_INT >= 33 &&
                    activity.checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                activity.runOnUiThread(() -> activity.requestPermissions(
                        new String[]{Manifest.permission.POST_NOTIFICATIONS}, POST_NOTIFICATIONS_REQUEST));
            }
        }

        @JavascriptInterface
        public void cancelSupplementReminder() {
            SupplementReminderReceiver.cancel(context);
        }

'''
if marker not in s:
    raise SystemExit("NativeBridge insertion point not found")
s = s.replace(marker, insert + marker, 1)

qa_old = '''        if ("full_flow".equals(action)) {
            view.evaluateJavascript('''
qa_new = '''        if ("vitamins_flow".equals(action)) {
            view.evaluateJavascript(
                    "(function(){return window.sviatQaVitamins?window.sviatQaVitamins():'NO_VITAMINS_QA';})()",
                    value -> {
                        Log.i("SviatQA", "VITAMINS=" + value);
                        SupplementReminderReceiver.schedule(getApplicationContext(), "ZMA", 23, 59);
                        Log.i("SviatQA", "REMINDER_SCHEDULED=ZMA");
                    }
            );
            return;
        }

        if ("full_flow".equals(action)) {
            view.evaluateJavascript('''
if qa_old not in s:
    raise SystemExit("QA insertion point not found")
s = s.replace(qa_old, qa_new, 1)

p.write_text(s, encoding="utf-8")
print("Applied SviatFit 1.6.4 native supplement reminders")
