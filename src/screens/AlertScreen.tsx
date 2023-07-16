import React from 'react'
import { Alert, Button, View } from 'react-native'

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(

            //Alert texts
            "Alert title",
            "Alert body",
            [   
                // Alert buttons
                {
                    text:"Cancel",
                    style: "destructive",
                },
                { text: "Ok", onPress:() => console.log("Ok pressed") }
            ],
            // Alert options
            {
                cancelable: true,
            }
        )
    }

    const showPrompt = () => {

        // // Only works on IOS
        // Alert.prompt(
        //     "Title",
        //     "Message",
        //     ( value: string ) => console.log('info', value),
        //     "secure-text",
        //     "Lorem ipsum",
        //     "number-pad"
        // )

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
        
    }
  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title='Alerts'/>

        <Button
            title='Show Alert'
            onPress={ showAlert }
        />
        
        <View style={{ height: 10}}/>
        <Button
            title='Show Prompt'
            onPress={ showPrompt }
        />
    </View>
  )
}
