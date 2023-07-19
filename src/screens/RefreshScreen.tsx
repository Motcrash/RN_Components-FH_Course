import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const RefreshScreen = () => {

    const { top } = useSafeAreaInsets();

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
                progressBackgroundColor={'#b9d7a1'}
                colors={ [ 'red', 'orange', 'blue']}
                // For IOS
                style={{ backgroundColor: '#acc95f'}}
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
