import { Platform } from 'react-native';
import BackgroundService from 'react-native-background-actions';
import BackgroundJob from 'react-native-background-actions';

//@ts-ignore
const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));


BackgroundService.on('expiration', () => {
    console.log("I AM BEING CLOSED");

});

const taskRandom = async (taskData: any) => {
    if (Platform.OS == 'ios') {
        console.log("HERE 2")
    }

    await new Promise(async resolve => {
        const { delay } = taskData;
        console.log(BackgroundService.isRunning(), delay);
        for (let i = 0; BackgroundService.isRunning(); i++) {
            console.log(i);

            await BackgroundService.updateNotification({ 
                taskDesc: 'New ExampleTask description => ' + i, 
                progressBar: {max: 1,value: 2}
            });
            await sleep(delay);
        }


    })

}


const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // Add this
    parameters: {
        delay: 1000,
    },
};


export const startBackground = async ()=>{
        try {
        console.log('STARTING __________');
        await BackgroundService.start(taskRandom, options);
        console.log('STARTED_________');
        } catch (error) {
        console.log('error ________', error);
        }
}


export const endBackground = async ()=>{
    await BackgroundService.stop();
}

