import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Item } from '../interfaces/Interfaces'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    item: Item
}

export const FlatListMenuItem = ({ item }: Props) => {

    const navigation = useNavigation();
    const { theme:{colors} } = useContext( ThemeContext )

  return (
    <TouchableOpacity
        activeOpacity={ 0.3 }
        onPress={ () => navigation.navigate( item.component )}
    >
        <View style={ styles.container }>
            <Icon
                name={item.icon}
                color={ colors.primary }
                size={ 23 }
            /> 
            <Text style={{...styles.itemText, color: colors.text}}
            >
                { item.name }
            </Text>
            
            <View style={{ flex: 1 }} />

            <Icon
                name="chevron-forward-outline"
                color={ colors.primary }
                size={ 23 }
            /> 
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
});