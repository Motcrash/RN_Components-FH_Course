import React from 'react'
import { DarkTheme, NavigationContainer, Theme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNav } from './src/navigations/StackNavigation';

// const customTheme: Theme = {
//   dark: true, 
//   colors: {
//     ...DarkTheme.colors,
//     primary: string,
//     background: 'grey',
//     card: string,
//     text: string,
//     border: string,
//     notification: string,
//   }
// }

export const App = () => {
  return (
    <NavigationContainer
      // theme={customTheme}
    >
        <StackNav/>
    </NavigationContainer>
  )
}
