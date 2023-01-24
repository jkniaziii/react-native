package com.musicplayer;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class BackgroundTaskReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        // This is the task that will be run every 30 minutes
        System.out.println("Running background task...");
        // Perform the task here
        // ...
    }
}