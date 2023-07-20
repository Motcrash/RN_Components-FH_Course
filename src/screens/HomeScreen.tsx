import React from 'react'
import { View, FlatList } from 'react-native';
import { styles } from '../theme/AppTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { items } from '../data/Items';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

export const HomeScreen = () => {

  return (
    <View style={{ flex: 1, ...styles.globalMargin}}>

        <FlatList
            data={ items }
            renderItem={ ({ item }) => <FlatListMenuItem item={item}/> }
            keyExtractor={ (item) => item.name }
            ListHeaderComponent={ () => <HeaderTitle title="Menu options"/> }
            ItemSeparatorComponent={ () => <ItemSeparator/> }
        />
    </View>
  )
}
