import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';
export const RefreshScreen = () => {

    const { theme:{colors}} = useContext( ThemeContext );
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing( true );
        setTimeout(() => {
            setRefreshing( false );
            setData('Hello world');
        }, 2000);
    }

  return (
    <ScrollView
        refreshControl={
            <RefreshControl 
                refreshing = { refreshing }
                onRefresh={ onRefresh }
                progressViewOffset={ 10 }
                progressBackgroundColor={ colors.primary }
                colors={[colors.card]}
                // For IOS
                style={{ backgroundColor: colors.primary}}
                tintColor='Black'
            /> 
        }
    >
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Pull to refresh'/>
            
            {
                data && <HeaderTitle title={ data }/>
            }

        </View>
    </ScrollView>
  )
}
