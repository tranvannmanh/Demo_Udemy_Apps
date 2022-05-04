import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';
import Color from '../constants/color';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function inputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    
    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title >Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCorrect={false}
                    onChangeText={inputHandler}
                    value={enteredNumber}
                    />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        // padding: 12,
        flex: 1,
        alignItems: 'center',
    },

    numberInput: {
        width: 50,
        marginVertical: 8,
        fontSize: 32,
        borderBottomColor: Color.startGameInputField,
        borderBottomWidth: 2,
        color: Color.startGameInputField,
        textAlign: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1,
    }
})

export default StartGameScreen;