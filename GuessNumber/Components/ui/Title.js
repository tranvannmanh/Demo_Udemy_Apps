import React from 'react';
import Color from '../../constants/color';
import { View, Text, StyleSheet } from 'react-native';
// import { Children } from 'react/cjs/react.production.min';

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.titleGame,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Color.titleGame,
        padding: 12,
    },
})