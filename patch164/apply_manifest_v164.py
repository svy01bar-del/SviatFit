from pathlib import Path
p=Path('app/src/main/AndroidManifest.xml')
s=p.read_text(encoding='utf-8')
if 'android.permission.RECEIVE_BOOT_COMPLETED' not in s:
    s=s.replace('<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>', '<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>\n    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>')
receiver='''        <receiver\n            android:name=".SupplementReminderReceiver"\n            android:exported="true">\n            <intent-filter>\n                <action android:name="android.intent.action.BOOT_COMPLETED"/>\n            </intent-filter>\n        </receiver>\n'''
if '.SupplementReminderReceiver' not in s:
    s=s.replace('    </application>', receiver+'    </application>')
p.write_text(s,encoding='utf-8')
print('Applied supplement receiver manifest entries')
