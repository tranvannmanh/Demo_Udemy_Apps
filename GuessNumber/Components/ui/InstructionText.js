import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Color from '../../constants/color';

function InstructionText({ children, style }) {
    // const { width, height } = useWindowDimensions();
    // let fontSize = 24;

    // if (width < 500) {
    //     fontSize = 16;
    // }

    // const instructionText = {
    //     fontSize: fontSize,
    //     color: Color.startGameInputField
    // }

    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionText;

// const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    instructionText: {
        color: Color.startGameInputField,
        fontSize: 20
    }
})