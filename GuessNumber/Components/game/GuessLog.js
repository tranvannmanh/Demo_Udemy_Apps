import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Color from '../../constants/color';

function GuessLog({ roundNumber, guess }) {
    const { width, height } = useWindowDimensions();
    // const itemPadding = 12;
    // const marginVertical = 4;
    let guessLogFontSize = 16;

    if (width < 500) {
        guessLogFontSize = 12;
    }

    const innerText = {
        fontSize: guessLogFontSize,
    }

    // if (width < 500) {
    //     itemPadding = 6;
    //     // marginVertical = ;
    // }

    return (
        <View style={styles.listItem}>
            <Text style={innerText}>#{roundNumber}</Text>
            <Text style={innerText}>Opponent's guess: {guess}</Text>
        </View>
    )
}

export default GuessLog;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Color.startGameInputContainer,
        backgroundColor: Color.numberGame,
        padding: 6,
        borderRadius: 40,
        borderWidth: 1,
        flexDirection: 'row',
        marginVertical: 4,
        justifyContent: 'space-between',
        width: '100%',
        // maxWidth: '80%',
    },
})