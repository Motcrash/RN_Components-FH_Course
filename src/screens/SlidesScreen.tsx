import React, { useState, useRef } from 'react'
import { Button, Text, TouchableOpacity, Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Image, View, SafeAreaView, ImageSourcePropType } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';

const { width: screenWidth, height: screenHeight} = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

interface Props extends StackScreenProps<any, any>{}

const items: Slide[] = [
    {
        title: 'Title 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Title 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Title 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = ({ navigation }: Props) => {

    const {fadeIn, opacity } = useAnimation();
    const [activeIndex, setActiveIndex] = useState(0);
    const isVisible = useRef(false);

    const renderItem = ( item: Slide ) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#f2f2f2',
                borderRadius: 5,    
                padding: 40,
                justifyContent: 'center',
            }}>
                <Image
                source={item.img}
                style={{
                    width: '100%',
                    height: '60%',
                    resizeMode: 'center'
                }}
                />

                <Text style={ stylesScreen.title}>{item.title}</Text>
                <Text style={ stylesScreen.subtitle}>{item.desc}</Text>
            </View>
        )
    }


   return (
       <SafeAreaView
            style={{ flex:1, paddingTop: 50}}
       >
            <Carousel
              data={ items }
              vertical={false}
              renderItem={({ item }) => renderItem(item)}
              sliderWidth={ screenWidth }
              itemWidth={ screenWidth }
              layout='default'
              firstItem={0}
              onSnapToItem={ (index) => {
                setActiveIndex( index )
                if (index == 2){
                    isVisible.current = true;
                    fadeIn(500);
                }
                
              }}
            />  

            <Animated.View style={{ flexDirection: 'row-reverse', marginHorizontal: 20, opacity}}> 
                <TouchableOpacity style={ stylesScreen.nextButton }
                    activeOpacity={ 0.7 }
                    onPress={ () => {
                        if( isVisible.current){
                            navigation.navigate('HomeScreen')
                        }
                    }}
                >

                    <Text style={{
                        fontSize: 25,
                        color: 'white'
                    }}>
                        Next
                    </Text>
                    <Icon
                        name='chevron-forward-outline'
                        color='white'
                        size={ 30 }
                    />

                </TouchableOpacity>
            </Animated.View>

                <Pagination
                    dotsLength={ items.length }
                    activeDotIndex={ activeIndex }
                    dotColor='#876bc5'
                    inactiveDotColor='#787878'
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 100,
                    }}
                    animatedDuration={ 0 }
                />
            
       </SafeAreaView>
   )
}

const stylesScreen = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#876bc5'
    },
    subtitle: {
        fontSize: 15,
    },
    nextButton:{
        flexDirection: 'row',
        backgroundColor: '#876bc5',
        width: 120,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});