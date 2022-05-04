import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import GuessLog from '../Components/game/GuessLog';
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

function GameScreen({userNumber, onGameOver}) {

    const initialNumber = generateRandonNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialNumber);
    const [guessRounds, setGuessRounds] = useState([initialNumber]);
    
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
        setGuessRounds(prevGuess => [newRandNumber, ...prevGuess]);
    }

    useEffect(() => {
        if (currentGuess === userNumber)
            onGameOver(guessRounds.length);
    }, [currentGuess])
    
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const guessRoundListLength = guessRounds.length;

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
            <View style={styles.listContainer}>
                {/* {guessRounds.map(round => <Text key={round}>{round}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={itemData => <GuessLog roundNumber={ guessRoundListLength - itemData.index} guess={itemData.item}/>}
                    keyExtractor={item => item}
                />
            </View>
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
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
})