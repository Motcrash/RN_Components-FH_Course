import React from 'react'
import { View, FlatList } from 'react-native';
import { styles } from '../theme/AppTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { items } from '../data/Items';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = () => {

    const renderItemSeparator = () => {
        return(
            <View style = {{ borderBottomWidth: 1, opacity: 0.3, marginVertical: 8}}/> 
        )
    }

  return (
    <View style={{ flex: 1, ...styles.globalMargin}}>

        <FlatList
            data={ items }
            renderItem={ ({ item }) => <FlatListMenuItem item={item}/> }
            keyExtractor={ (item) => item.name }
            ListHeaderComponent={ () => <HeaderTitle title="Menu options"/> }
            ItemSeparatorComponent={ () => renderItemSeparator() }
        />
    </View>
  )
}
