import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Color from "../../constants/color";

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        backgroundColor: Color.startGameInputContainer,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 10,
    }
})