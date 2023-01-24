import React, { useEffect, useState } from 'react';
import { Button, NativeEventEmitter, NativeModules, TextInput, View } from 'react-native';

const MyModule = NativeModules.BackgroundTask;
const myModuleEmitter = new NativeEventEmitter();

const MyComponent = () => {
    const [buttonText, setButtonText] = useState('Initial Text');
    const [inputText, setInputText] = useState('Pressed');

    useEffect(() => {
        const listener = myModuleEmitter.addListener('changeButtonText', (text) => {
            setButtonText(text);
        });

        return () => {
            listener.remove();
        }
    }, [])


    const onButtonPress = () => {
        MyModule.changeButtonText(inputText);
    }


    return (
        <View>
            <TextInput onChangeText={(e) => setInputText(e)} />
            <Button onPress={onButtonPress} title={buttonText} />
        </View>
    )
}

export default MyComponent
