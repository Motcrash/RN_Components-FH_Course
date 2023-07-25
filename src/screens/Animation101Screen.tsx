import React, { useContext } from 'react'
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';

export const Animation101Screen = () => {

  const { opacity, position, startMoving, fadeIn, fadeOut} = useAnimation();
  const { stylesScreen } = stylesFunction();

  return (
    <View style={{ ...styles.globalMargin, flex: 1}}>
        <HeaderTitle title='Animation 101'/>
        <View style={ stylesScreen.container }>
          <Animated.View style={{
            ...stylesScreen.purpleBox,
            opacity,
            transform: [{
              translateX: position,
            }],
          }}/>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '80%'}}>
            <TouchableOpacity
              onPress={() =>{
                fadeIn(), 
                startMoving( 100 );
              }}
              style={ stylesScreen.button }
            >
              <Text style={ stylesScreen.buttonText }>Fade in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={ fadeOut }
              style={ stylesScreen.button }
            >
              <Text style={ stylesScreen.buttonText }>Fade out</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}


const stylesFunction = () => {
  const { theme:{colors}, theme:{secondary} } = useContext( ThemeContext )

  const stylesScreen = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    purpleBox:{
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
        marginBottom: 100,
        
    },
    button:{
      backgroundColor: secondary, 
      width: 100,
      height: 50, 
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: colors.text,
      fontSize: 20 
    }
  });

  return {
    stylesScreen
  }
}