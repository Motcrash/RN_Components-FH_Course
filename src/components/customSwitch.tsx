import React, { useContext, useState, } from 'react'
import { Platform, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean,
    onChange: ( value: boolean ) => void;
}

export const CustomSwitch = ( { isOn, onChange }: Props) => {

  const { theme: { colors }, theme: { secondary }} = useContext(ThemeContext)

  const [isEnabled, setIsEnabled] = useState(isOn)

  const toggleSwitch = () => {
      setIsEnabled( !isEnabled );
      onChange( !isEnabled );
  }

  return (
    <View>
         <Switch
            trackColor={{false: '#D9D9DB', true: secondary}}
            thumbColor={ (Platform.OS === 'android') ? colors.primary : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={ toggleSwitch }
            value={ isEnabled }
        />
    </View>
  )
}
