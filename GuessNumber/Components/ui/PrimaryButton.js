import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Color from '../../constants/color';

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
        <Pressable
                style={styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{color: '#640e4c'}}
        >
                    <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        backgroundColor: Color.startGameScreenButton,
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        elevation: 4,
    },
    buttonInnerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})