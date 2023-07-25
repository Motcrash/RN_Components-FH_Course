import React from 'react'
import 'react-native-gesture-handler';
import { StackNav } from './src/navigations/StackNavigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

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
    <AppState>
        <StackNav/>
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return( 
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}
