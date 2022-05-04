import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../Components/game/NumberContainer';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';

function generateRandonNumber(min, max, exclude) {
    const randNumber = Math.floor(Math.random() * (max - min)) + min;
    
    if (randNumber === exclude)
        return generateRandonNumber(min, max, exclude);
    else
        return randNumber;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, gameIsOver}) {

    const initialNumber = generateRandonNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialNumber);

    
    function nextGuessHandler(direction) {
        if (direction === 'lower' && currentGuess < userNumber || direction === 'higher' && currentGuess > userNumber) {
            Alert.alert("Don't lie,", 'You know that this is wrong!', [{
                text: 'Sorry', style: 'cancel'
            }]);
            return;
        }
            
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else
            minBoundary = currentGuess + 1;
        
        console.log(minBoundary, '-', maxBoundary);
        const newRandNumber = generateRandonNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandNumber);
    }

    useEffect(() => {
        if (currentGuess === userNumber)
            gameIsOver(true);
    }, [currentGuess])
    
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        // backgroundColor: Color.backgroundGameScreen,
    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    instructionText: {
        marginBottom: 12,
    },

    buttonContainer: {
        flex: 1,
    }
})