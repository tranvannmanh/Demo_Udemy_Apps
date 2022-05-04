import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../constants/color';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )    
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        borderWidth: 4,
        borderColor: Color.numberGame,
        borderRadius: 8,
        margin: 24,
        color: Color.numberGame,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Color.numberGame,
        fontSize: 36,
        fontWeight: 'bold',
    }
})