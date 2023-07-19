import React, { useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

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
                    style={ stylesScreen.inputStyle}
                    placeholder='Write your name'
                    autoCorrect={ false }
                    autoCapitalize='words'
                    onChangeText={ (value) => onChange( value, 'name')}
                />

                <TextInput
                    style={ stylesScreen.inputStyle}
                    placeholder='Write your email'
                    autoCorrect={ false }
                    keyboardType='email-address'
                    onChangeText={ (value) => onChange( value, 'email')}
                />

                <TextInput
                    style={ stylesScreen.inputStyle}
                    placeholder='Write your number'
                    keyboardType='phone-pad'
                    onChangeText={ (value) => onChange( value, 'phone')}
                    
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

const stylesScreen = StyleSheet.create({
    inputStyle:{
        borderWidth: 2,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(68, 116, 157, 0.6)',
        marginVertical: 10,
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
        switchText: {
        fontSize: 25,
    },
});