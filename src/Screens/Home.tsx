import { View, Text, Button } from 'react-native'
import React from 'react'
import { endBackground, startBackground } from '../Services';
import BackgroundTask from '../Services/module';



const HomeScreen = () => {


  const getTask = async () => {
    console.log("NativeModules  77 :", BackgroundTask);
    BackgroundTask.setAlarm()
    

  }


  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Test Start'
        onPress={startBackground}
      />
      <Button
        title='Test END'
        onPress={endBackground}
      />
      <Button
        title='START ALARAM'
        onPress={getTask}
      />
    </View>
  )
}


export default HomeScreen;


