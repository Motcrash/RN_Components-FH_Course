import React, { useState, } from 'react'
import { Platform, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'

interface Props {
    isOn: boolean,
    onChange: ( value: boolean ) => void;
}

export const CustomSwitch = ( { isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn)

    const toggleSwitch = () => {
        setIsEnabled( !isEnabled );
        onChange( !isEnabled );
    }

  return (
    <View>
         <Switch
            trackColor={{false: '#D9D9DB', true: '#0ca5b0'}}
            // thumbColor={ (Platform.OS === 'android') ? '#0ca5b0' : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={ toggleSwitch }
            value={ isEnabled }
        />
    </View>
  )
}
