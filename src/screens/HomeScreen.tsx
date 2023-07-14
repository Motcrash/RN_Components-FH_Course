import React from 'react'
import { Text } from 'react-native';
import { View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons' 
import { styles } from '../theme/AppTheme';

interface Item {
    name: string,
    icon: string,
    component: string,
}

const items = [
    {
        name: 'animation01',
        icon: 'cube-outline',
        component: 'Animatin101Screen'
    }
]

export const HomeScreen = () => {

    const renderItem = ({ name, icon, }: Item ) => {
        return(
            <View>
                <Text>{ name } - { icon }</Text>
            </View>
        )
    }

  return (
    <View style={{ flex: 1 }}>
        
        <Text style={ styles.title }>Options menu</Text>

        <FlatList
            data={ items }
            renderItem={ ({ item }) => renderItem( item ) }
            keyExtractor={ (item) => item.name }
        />
    </View>
  )
}
