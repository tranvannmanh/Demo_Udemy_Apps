import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';
import Color from '../constants/color';

function GameOverScreen({userNumber, guessRounds, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over Screen</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../Images/goal_roading.jpg')}
                    style={styles.goal_roading}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone need <Text style={styles.hightlight}>{guessRounds}</Text> times to guess the number <Text style={styles.hightlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        margin: 36,
        borderColor: Color.startGameInputField,
        overflow: 'hidden',
    },
    goal_roading: {
        opacity: .85,
    },
    summaryText: {
        textAlign: 'center',
        fontSize: 24,
        color: 'black',
        marginBottom: 24,
    },
    hightlight: {
        color: Color.startGameScreenButton,
    },
    
})