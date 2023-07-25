import React, { useContext } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

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

  const { stylesScreen } = stylesFunction();

  return (
    <View style={{ ...styles.globalMargin, flex: 1}}>
        <SectionList
            sections={ publishers }
            keyExtractor={( item, index ) => item + index }
            stickySectionHeadersEnabled
            showsVerticalScrollIndicator={ false }
            renderItem={({ item }) => <Text style={ stylesScreen.character } >{ item }</Text>}
            
            ListHeaderComponent={() => <HeaderTitle title='Section list'/>}
            
            renderSectionHeader={({ section }) => (
                <View style={ stylesScreen.sectionHeader }>
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

const stylesFunction = () => {

  const { theme:{colors}} = useContext( ThemeContext );

  const stylesScreen = StyleSheet.create({
    section: {
        color: colors.primary,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sectionHeader:{
      backgroundColor: colors.background
    },
    character:{
      color: colors.text,
      fontSize: 18,
      marginBottom: 6
    },
    footer:{
        fontSize: 20,
        color: colors.primary,
        fontWeight: 'bold',
        marginVertical: 20
    },
  });

  return {
    stylesScreen
  }

}
