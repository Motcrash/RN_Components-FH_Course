import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

  const { theme: { colors }} = useContext(ThemeContext)

  const styles = StyleSheet.create({
    switchRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5
    },
    switchText: {
      color: colors.text,
      fontSize: 25,
    }
});

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

      <Text style={{ ...styles.switchText, color: colors.text}}>
        { JSON.stringify(state, null, 5 )}
      </Text>

    </View>
  )
}