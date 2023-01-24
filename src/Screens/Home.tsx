import { View, Text, Button } from 'react-native'
import React from 'react'
import { endBackground, startBackground } from '../Services';
import BackgroundTask from '../Services/module';
import MyComponent from './UpdateButton';



const HomeScreen = () => {


  const getTask = async () => {
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
      <MyComponent />
    </View>
  )
}


export default HomeScreen;


