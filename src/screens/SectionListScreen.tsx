import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { ItemSeparator } from '../components/ItemSeparator';

interface Publishers {
    publisher: string;
    data: string[];
}

const publishers: Publishers[] = [
    {
      publisher: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Joker", "Harley Quinn", "Lex Luthor", "Doomsday"]
    },
    {
      publisher: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman", "Hulk", "Thor", "Doctor Strange"]
    },
    {
      publisher: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Naruto", "Ash Ketchum", "Izuku Midoriya", "Nezuko Kamado", "Light Yagami"]
    }
];

export const SectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1}}>
        <SectionList
            sections={ publishers }
            keyExtractor={( item, index ) => item + index }
            stickySectionHeadersEnabled
            showsVerticalScrollIndicator={ false }
            renderItem={ ({ item }) => <Text>{ item }</Text>}
            
            ListHeaderComponent={() => <HeaderTitle title='Section list'/>}
            
            renderSectionHeader={({ section }) =>(
                <View style={{ backgroundColor: '#f2f2f2'}}>
                    <Text style={ stylesScreen.section }>{ section.publisher }</Text>
                </View>
            )}
            
            renderSectionFooter={({ section }) => (
                <Text style={ stylesScreen.footer}>{'Total: ' + section.data.length }</Text>
            )}

            ListFooterComponent={() => <HeaderTitle title={ 'Publishers: ' + publishers.length} />}

            ItemSeparatorComponent={() => <ItemSeparator/>}
        />        
    </View>
  )
}

const stylesScreen = StyleSheet.create({
    section: {
        color: '#1e8c93',
        fontSize: 30,
        fontWeight: 'bold'
    },
    footer:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },

});