import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { FadeInImage } from '../components/FadeInImage'

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5,])
     
    const loadMore = () => {
        const array: number[] = [];
        for ( let i = 0; i < 5; i++ ) {
            array[i] = numbers.length + i;
            
        }

        setTimeout(() => {
            setNumbers([...numbers, ...array]);
        }, 1500);
    }

    const renderItem = ( item: number) => {
        return( 
            <FadeInImage 
                uri={`https://picsum.photos/id/${ item }/728/728`} 
                style={{ 
                    width: '95%',
                    height: 300,
                    borderRadius: 10,   
                    marginBottom: 10
                }}    
            /> 
        )
    }
    
   return (
       <View style={{ flex: 1, }}>
            <FlatList
                data={ numbers }
                keyExtractor={( item ) => item.toString() }
                renderItem={( {item} ) => renderItem(item) }

                ListHeaderComponent={() => (
                    <View style={{ marginHorizontal: 20 }}>
                        <HeaderTitle title="Infinite scroll"/>
                    </View>
                )}
                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }

                ListFooterComponent={ () => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent:'center',
                        alignContent:'center',
                    }}>
                        <ActivityIndicator size={ 25 } color="#5856D6" />
                    </View>
                )}
            />
       </View>
   )

}

const stylesScreen = StyleSheet.create({
    itemText:{
        backgroundColor: 'green',
        height: 150,
    }
});