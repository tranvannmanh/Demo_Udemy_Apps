import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Dimensions, useWindowDimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
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

    const { width, height } = useWindowDimensions();
    const marginTopDistance = height <= 480 ? 32 : 64;

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
            </KeyboardAvoidingView>
            </ScrollView>
    )
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },

    numberInput: {
        width: 50,
        marginBottom: 8,
        fontSize: deviceWidth <= 480 ? 24:32,
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