import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const { opacity, position, startMoving, fadeIn, fadeOut} = useAnimation();

  return (
    <View style={ styles.container }>
        <Animated.View style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [{
            translateX: position,
          }]
        }}/>

        <Button
          title='Fade in'
          onPress={ () =>{
            fadeIn(), 
            startMoving( 100 );
          }}
        />

        <Button
          title='Fade out'
          onPress={ fadeOut }
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    purpleBox:{
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    }
});