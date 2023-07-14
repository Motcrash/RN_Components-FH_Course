import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNav } from './src/navigations/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
        <StackNav/>
    </NavigationContainer>
  )
}
