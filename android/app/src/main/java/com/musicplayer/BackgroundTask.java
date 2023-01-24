package com.musicplayer;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.util.Log;


public class BackgroundTask extends ReactContextBaseJavaModule {
   BackgroundTask(ReactApplicationContext context) {
       super(context);
   }

    @Override
    public String getName() {
        return "BackgroundTask";
    }
 
    @ReactMethod
    public void setAlarm() {
        Log.d("BackgroundTask", "Running background task...");
    }
}

