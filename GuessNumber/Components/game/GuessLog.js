import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Color from '../../constants/color';

function GuessLog({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's guess: {guess}</Text>
        </View>
    )
}

export default GuessLog;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Color.startGameInputContainer,
        backgroundColor: Color.numberGame,
        padding: 12,
        borderRadius: 40,
        borderWidth: 1,
        flexDirection: 'row',
        marginVertical: 8,
        justifyContent: 'space-between',
        width: '100%',
    }
})