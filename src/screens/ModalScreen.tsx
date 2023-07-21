import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title='Modal screen'/> 

        <Button
            title="Open Modal"
            onPress={() => setIsVisible(true) }
        /> 

        <Modal
            animationType='fade'
            visible={ isVisible }
            transparent={ true }
        >
            <View style={ stylesScreen.modalContainer }>
                <View style={[styles.globalMargin, stylesScreen.modalContent]}>
                    <Text style = {{  fontSize: 40, fontWeight: 'bold'}}>Modal</Text>
                    <Text style = {{  fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Modal body</Text>
                    <Button
                        title='Close'
                        onPress={() => setIsVisible(false)}
                    /> 
                </View>
            </View>
        </Modal>
    </View>
  )
}

const stylesScreen = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 10,
        borderRadius: 10
    }
});
