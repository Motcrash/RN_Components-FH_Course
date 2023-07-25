import React, { useContext } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                placeholder: 'placeholder',
            }
        );
        
    }

    const { stylesScreen } = stylesFunction(); 

  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
        <HeaderTitle title='Alerts'/>

        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={ showAlert } 
                style={ stylesScreen.button }
            >
                <Text style={ stylesScreen.buttonText}>
                    Show Alert
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ showPrompt } 
                style={ stylesScreen.button }
            >
                <Text style={ stylesScreen.buttonText }>
                    Show Prompt
                </Text>
            </TouchableOpacity>
        </View>

        {/* <Button
            title='Show Alert'
            onPress={ showAlert }
        />
        
        <View style={{ height: 10}}/>
        <Button
            title='Show Prompt'
            onPress={ showPrompt }
        /> */}
    </View>
  )
}

const stylesFunction = () => {
    const { theme: { colors }, theme: {altTextColor}} = useContext(ThemeContext)

    const stylesScreen = StyleSheet.create({
        button:{
            backgroundColor: colors.primary,
            alignItems: 'center',
            height: 50,
            flexDirection: 'row',
            marginBottom: 20,
        },
        buttonText:{
            width: '100%',
            fontSize: 20,
            textAlign: 'center',
            color: altTextColor,
        },
    });
    
    return {
        stylesScreen
    }
}