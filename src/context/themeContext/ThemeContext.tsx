import React, {createContext, useReducer, useEffect} from 'react'
import { useColorScheme } from 'react-native'
import { ThemeState, darkTheme, lightTheme, themeReducer } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any ) => {

    const colorScheme = useColorScheme();

    const [ theme, dispatch ] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme )

    useEffect(() => {
      ( colorScheme === 'light')
        ? setLightTheme()
        : setDarkTheme()
    }, [colorScheme])
    

    const setDarkTheme = () => {
        dispatch({ type: 'setDarkTheme'})
    }

    const setLightTheme = () => {
        dispatch({ type: 'setLightTheme'})
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}