import React, { useContext, useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';

export const Animation102Screen = () => {

  const { stylesScreen } = stylesFunction();

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y, },
    ],{
      useNativeDriver: false
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });


  return (
    <View style={{ ...styles.globalMargin, flex: 1}}>
      <HeaderTitle title='Animation 102'/> 
      <View style={ stylesScreen.container }>
        <Animated.View 
          {...panResponder.panHandlers}
          style={[ pan.getLayout(), stylesScreen.cyanBox ]}
        />
      </View>
    </View>
  )
}


const stylesFunction = () => {
  const { theme:{colors} } = useContext( ThemeContext )
  const stylesScreen = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
      cyanBox:{
          backgroundColor: colors.primary,
          width: 150,
          height: 150,
          borderTopEndRadius: 90,
          borderTopStartRadius: 90,
      }
  });

  return{ 
    stylesScreen
  }

}
