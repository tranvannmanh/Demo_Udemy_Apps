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
        // alignItems: 'center',
        margin: 4,
        elevation: 4,
    },
    buttonInnerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    // pressed: {
    //     opacity: 0.75
    // },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
})