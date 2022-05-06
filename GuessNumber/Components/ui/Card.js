import React from "react";
import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import Color from "../../constants/color";

function Card({ children }) {
    const { width, height } = useWindowDimensions();
    let marginTopDistance = 30;

    if (height <= 480) {
        marginTopDistance = 15;
    }

    // if (width <= 480) {
    //     marginTopDistance = 15
    // }

    const cardStyle = {
        marginTop: marginTopDistance,
    }

    return (
        <View style={[styles.card, cardStyle]}>{children}</View>
    )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: deviceHeight <= 800 ? 15 : 30,
        padding: deviceHeight <= 800 ? 8 : 16,
        backgroundColor: Color.startGameInputContainer,
        // marginHorizontal: deviceWidth <= 480 ? 24 : 48,
        borderRadius: 8,
        elevation: 10,
        width: 300,
        maxWidth: '80%',
    }
})