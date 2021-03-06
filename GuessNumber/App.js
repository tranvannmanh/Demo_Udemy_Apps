import React, { useState } from 'react';
import { StyleSheet, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './Screen/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './Screen/GameScreen';
import GameOverScreen from './Screen/GameOverScreen';

function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRound] = useState(0);

  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRound(0);
  }

  function onGameOverHandler(guessRounds) {
    setGameOver(true);
    setGuessRound(guessRounds);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>
  
  if (userNumber && !gameIsOver) {
    screen = <GameScreen userNumber={userNumber} onGameOver={onGameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen
      userNumber={userNumber}
      onStartNewGame={startNewGameHandler}
      guessRounds={guessRounds}
    />
  }

  return (
      <LinearGradient
        style={styles.rootScreen}
        colors={['#8b1b0c', '#cc8c16']}
        >
        <ImageBackground
          source={require('./Images/dices.png')}
          style={styles.rootScreen}
          resizeMode='cover'
          imageStyle={styles.backgroundImage}
          >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  )
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ebcc66'
  },
  backgroundImage: {
    opacity: 0.15,
  }
})