import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';
import Color from '../constants/color';

function GameOverScreen({ userNumber, guessRounds, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;
    let fontSize = 23;
    let margin = 36;

    if (height <= 480) {
        imageSize = 80;
        fontSize = 16;
        margin = 18;
    }

    if (width <= 480) {
        imageSize = 150;
        fontSize = 16;
        // margin = 18;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        margin: margin,
    }

    const summaryTextStyle = {
        fontSize: fontSize,
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Game Over Screen</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image
                    source={require('../Images/goal_roading.jpg')}
                    style={styles.goal_roading}
                />
            </View>
            <Text style={[styles.summaryText, summaryTextStyle]}>
                Your phone need <Text style={styles.hightlight}>{guessRounds}</Text> times to guess the number <Text style={styles.hightlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // width: deviceWidth <= 480 ? 150 : 300,
        // height: deviceWidth <= 480 ? 150 : 300,
        // borderRadius: deviceWidth <= 480 ? 75 : 150,
        borderWidth: 3,
        // margin: 36,
        borderColor: Color.startGameInputField,
        overflow: 'hidden',
    },
    goal_roading: {
        opacity: .85,
    },
    summaryText: {
        textAlign: 'center',
        // fontSize: deviceWidth <= 480 ? 16 : 24,
        color: 'black',
        marginBottom: 24,
    },
    hightlight: {
        color: Color.numberGame,
    },
    
})