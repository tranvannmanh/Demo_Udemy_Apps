import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import Color from '../../constants/color';

function NumberContainer({ children }) {
    const { width, height } = useWindowDimensions();
    let marginDistance = 24;
    let padding = 24;

    if (height < 500) {
        marginDistance = 12;
        padding = 12
    }

    if (width < 500) {
        marginDistance = 24;
        padding = 12;
    }

    const numberContainerStyle = {
        // margin: marginDistance,
        padding: padding,
    }

    return (
        <View style={[styles.container, {margin: marginDistance}]}>
            <Text style={[styles.numberText, numberContainerStyle]}>{children}</Text>
        </View>
    )    
}

export default NumberContainer;

// const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        // padding: deviceWidth <= 480 ? 12 : 24,
        borderWidth: 3,
        borderColor: Color.numberGame,
        borderRadius: 8,
        // margin: deviceWidth <= 480 ? 12 : 24,
        color: Color.numberGame,
        alignItems: 'center',
        justifyContent: 'center',
        // maxWidth: '80%',
        // width: 300,
    },
    numberText: {
        color: Color.numberGame,
        fontSize: 36,
        fontWeight: 'bold',
    }
})