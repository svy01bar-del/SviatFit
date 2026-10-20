package com.sviat.fit;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

import java.util.Calendar;

public class SupplementReminderReceiver extends BroadcastReceiver {
    public static final String ACTION_REMIND = "com.sviat.fit.SUPPLEMENT_REMINDER";
    private static final String PREFS = "sviatfit_supplements";
    private static final String KEY_ENABLED = "enabled";
    private static final String KEY_NAME = "name";
    private static final String KEY_HOUR = "hour";
    private static final String KEY_MINUTE = "minute";
    private static final String CHANNEL_ID = "supplement_reminders";
    private static final int REQUEST_CODE = 8301;
    private static final int NOTIFICATION_ID = 8302;

    @Override
    public void onReceive(Context context, Intent intent) {
        SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        if (!prefs.getBoolean(KEY_ENABLED, false)) return;

        String action = intent == null ? null : intent.getAction();
        if (ACTION_REMIND.equals(action)) {
            showNotification(context, prefs.getString(KEY_NAME, "ZMA"));
        }
        scheduleNext(context);
    }

    public static void schedule(Context context, String name, int hour, int minute) {
        context.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit()
                .putBoolean(KEY_ENABLED, true)
                .putString(KEY_NAME, name == null || name.trim().isEmpty() ? "ZMA" : name)
                .putInt(KEY_HOUR, Math.max(0, Math.min(23, hour)))
                .putInt(KEY_MINUTE, Math.max(0, Math.min(59, minute)))
                .apply();
        scheduleNext(context);
    }

    public static void cancel(Context context) {
        context.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit()
                .putBoolean(KEY_ENABLED, false)
                .apply();
        AlarmManager alarm = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        if (alarm != null) alarm.cancel(reminderIntent(context));
    }

    private static void scheduleNext(Context context) {
        SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        if (!prefs.getBoolean(KEY_ENABLED, false)) return;

        int hour = prefs.getInt(KEY_HOUR, 22);
        int minute = prefs.getInt(KEY_MINUTE, 30);
        Calendar next = Calendar.getInstance();
        next.set(Calendar.HOUR_OF_DAY, hour);
        next.set(Calendar.MINUTE, minute);
        next.set(Calendar.SECOND, 0);
        next.set(Calendar.MILLISECOND, 0);
        if (next.getTimeInMillis() <= System.currentTimeMillis()) next.add(Calendar.DAY_OF_YEAR, 1);

        AlarmManager alarm = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        if (alarm == null) return;
        PendingIntent pending = reminderIntent(context);
        if (Build.VERSION.SDK_INT >= 23) {
            alarm.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, next.getTimeInMillis(), pending);
        } else {
            alarm.set(AlarmManager.RTC_WAKEUP, next.getTimeInMillis(), pending);
        }
    }

    private static PendingIntent reminderIntent(Context context) {
        Intent intent = new Intent(context, SupplementReminderReceiver.class).setAction(ACTION_REMIND);
        return PendingIntent.getBroadcast(context, REQUEST_CODE, intent,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    private static void showNotification(Context context, String name) {
        NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel channel = new NotificationChannel(
                    CHANNEL_ID, "Вітаміни", NotificationManager.IMPORTANCE_DEFAULT);
            channel.setDescription("Щоденні нагадування про добавки");
            nm.createNotificationChannel(channel);
        }

        Intent open = new Intent(context, MainActivity.class)
                .setAction(Intent.ACTION_MAIN)
                .addCategory(Intent.CATEGORY_LAUNCHER)
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK|Intent.FLAG_ACTIVITY_SINGLE_TOP|Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent contentIntent = PendingIntent.getActivity(context, 8303, open,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        Notification.Builder builder = Build.VERSION.SDK_INT >= 26
                ? new Notification.Builder(context, CHANNEL_ID)
                : new Notification.Builder(context);
        builder.setSmallIcon(android.R.drawable.ic_dialog_info)
                .setContentTitle("Час прийняти " + name)
                .setContentText("3 капсули з водою · за етикеткою бажано перед сном")
                .setAutoCancel(true)
                .setContentIntent(contentIntent)
                .setCategory(Notification.CATEGORY_REMINDER)
                .setVisibility(Notification.VISIBILITY_PUBLIC);
        nm.notify(NOTIFICATION_ID, builder.build());
    }
}
