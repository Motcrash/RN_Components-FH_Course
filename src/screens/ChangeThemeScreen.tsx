import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext)

   return (
       <View style={styles.globalMargin}>
            <HeaderTitle title='Themes'/>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity 
                    onPress={ setLightTheme }
                    activeOpacity={0.6}
                    style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        width: 150,
                        height: 50,
                        borderRadius: 25
                }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20
                    }}>
                        Light
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={ setDarkTheme }
                    activeOpacity={0.6}
                    style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        width: 150,
                        height: 50,
                        borderRadius: 25
                }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20
                    }}>
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
       </View>
   )
}