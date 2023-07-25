import { Theme } from "@react-navigation/native"

type ThemeAction = 
    | { type: 'setLightTheme'}
    | { type: 'setDarkTheme'}

export interface ThemeState extends Theme{
    currentTheme: 'light' | 'dark',
    dividerColor: string,
    secondary: string,
    altTextColor: string

}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.7)',
    secondary: '#a4bdbc',
    dark: false,
    altTextColor: 'white',
    colors: {
        primary: '#2d6478',
        background: '#f2f2f2',
        card: '#d3dbd9',
        text: 'black',
        border: 'purple',
        notification: 'gray',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: '#f6f6f6',
    secondary: '#906090',
    altTextColor: 'white',
    colors: {
        primary: '#876bc5',
        background: 'black',
        card: '#001848', //#002930
        text: 'white',
        border: 'purple',
        notification: '#333333',
    }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {
    switch (action.type) {
        case 'setLightTheme':
            return { ...lightTheme }

        case 'setDarkTheme':
            return { ...darkTheme }
    
        default:
            return { ...state}
    }
}