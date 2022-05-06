import React from 'react';
import Color from '../../constants/color';
import { Text, StyleSheet, useWindowDimensions } from 'react-native';
// import { Children } from 'react/cjs/react.production.min';

function Title({ children }) {
    
    const { width, height } = useWindowDimensions();
    const paddingVerticalDistance = height <= 480 ? 12 : 16;
    
    return (
        <Text style={[styles.title, {paddingVertical: paddingVerticalDistance}]}>{children}</Text>
    )
}

export default Title;

// const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        // padding: deviceWidth <= 480 ? 12 : 24,
        borderRadius: 10,
        width: 300,
        maxWidth: '80%',
    },
})