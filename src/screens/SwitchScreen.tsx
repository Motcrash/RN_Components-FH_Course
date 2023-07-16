import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/customSwitch';

export const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })
  

  const onChange = ( value: boolean, field: keyof typeof state ) =>{
    setState({
      ...state,
      [field]: value,
    })
  }
  
  const { isActive, isHappy, isHungry }  = state;

  return (
    <View style={{ marginHorizontal: 20 }}>

      <HeaderTitle title='Switches'/> 

      <View style={ styles.switchRow }>
        <Text style={ styles.switchText }>IsActive</Text>
        <CustomSwitch isOn={ isActive } onChange={ (value) => onChange( value, 'isActive' )}/> 
      </View>

      <View style={ styles.switchRow }>
        <Text style={ styles.switchText }>IsHungry</Text>
        <CustomSwitch isOn={ isHungry } onChange={ (value) => onChange( value, 'isHungry' )}/> 
      </View>    

      <View style={ styles.switchRow }>
        <Text style={ styles.switchText }>IsHappy</Text>
        <CustomSwitch isOn={ isHappy } onChange={ (value) => onChange( value, 'isHappy' )}/> 
      </View>

      <Text style={{ ...styles.switchText, color: 'black'}}>
        { JSON.stringify(state, null, 5 )}
      </Text>

    </View>
  )
}


const styles = StyleSheet.create({
    switchRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5
    },
    switchText: {
      fontSize: 25,
    }
});