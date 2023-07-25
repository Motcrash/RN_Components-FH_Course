import React, { useContext, useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ModalScreen = () => {

    const { theme:{colors}} = useContext( ThemeContext );
    const { stylesScreen } = stylesFunction();

    const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title='Modal screen'/> 

        <Button
            title="Open Modal"
            onPress={() => setIsVisible(true) }
            color={ colors.primary }
        /> 

        <Modal
            animationType='fade'
            visible={ isVisible }
            transparent={ true }
        >
            <View style={ stylesScreen.modalContainer }>
                <View style={[styles.globalMargin, stylesScreen.modalContent]}>
                    <Text style = { stylesScreen.ModalTitle }>Modal</Text>
                    <Text style = { stylesScreen.modalSubtitle }>Modal body</Text>
                    <Button
                        title='Close'
                        onPress={() => setIsVisible(false)}
                        color={colors.primary}
                    /> 
                </View>
            </View>
        </Modal>
    </View>
  )
}

const stylesFunction = () => {

    const { theme:{colors}} = useContext( ThemeContext );

    const stylesScreen = StyleSheet.create({
        modalContainer: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalContent: {
            backgroundColor: colors.notification,
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
        }, 
        ModalTitle:{
            fontSize: 40, 
            fontWeight: 'bold',
            color: colors.text,
        }, 
        modalSubtitle:{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
            color: colors.text,
        },
    });

    return {
        stylesScreen
    }
}
