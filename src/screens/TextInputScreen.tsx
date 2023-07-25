import React, { useContext } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
    const { theme:{dividerColor} } = useContext( ThemeContext )

    const { stylesScreen } = stylesFunction();

    const { onChange, form, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    });

  return (

    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView>
            <View style={ styles.globalMargin }>
                <HeaderTitle title='TextInput'/>

                <TextInput
                    style={ stylesScreen.inputStyle }
                    placeholder='Write your name'
                    autoCorrect={ false }
                    autoCapitalize='words'
                    onChangeText={ (value) => onChange( value, 'name')}
                    placeholderTextColor={ dividerColor }
                />

                <TextInput
                    style={ stylesScreen.inputStyle }
                    placeholder='Write your email'
                    autoCorrect={ false }
                    keyboardType='email-address'
                    onChangeText={ (value) => onChange( value, 'email')}
                    placeholderTextColor={ dividerColor }
                />

                <TextInput
                    style={ stylesScreen.inputStyle }
                    placeholder='Write your number'
                    keyboardType='phone-pad'
                    onChangeText={ (value) => onChange( value, 'phone')}
                    placeholderTextColor={ dividerColor }
                />

                <View style={ stylesScreen.switchRow }>
                    <Text style={ stylesScreen.switchText }>Subscribe</Text>
                    <CustomSwitch isOn={ isSubscribed } onChange={ (value: boolean) => onChange( value, 'isSubscribed' )}/> 
                </View>
                
                <HeaderTitle title={ JSON.stringify(form, null, 3) }/>

            </View>

            <View style={{ height: 20 }}/> 
        </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

const stylesFunction = () => {
    const { theme:{colors} } = useContext( ThemeContext )

    const stylesScreen = StyleSheet.create({
        inputStyle:{
            borderWidth: 2,
            height: 40,
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: colors.primary,
            marginVertical: 10,
            color: colors.text,
        },
        switchRow:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 5
        },
        switchText: {
            color: colors.text,
            fontSize: 25,
        },
    });

    return {
        stylesScreen
    }
}

