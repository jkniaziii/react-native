package com.musicplayer;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.ReactMethod;
import android.content.Context;
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
    @ReactMethod
     public void changeButtonText(String text) {
        ReactApplicationContext context = getReactApplicationContext();
        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("changeButtonText", text);
    }
}

