import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import StartGameScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "./constants/colors";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(true);
	const [guessRound, setGuessRound] = useState(0);

	const [fontsLoaded] = useFonts({
		"raleway-black": require("./assets/fonts/Raleway-Black.ttf"),
		"raleway-blackItalic": require("./assets/fonts/Raleway-BlackItalic.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	//

	function pickedNumberHandler(pickedNumber) {
		// console.log(pickedNumber, "pickedNumber");
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler(numberOfRounds) {
		setGameIsOver(true);
		setGuessRound(numberOfRounds);
	}

	function startNewGameHandler() {
		setUserNumber(null);
		setGameIsOver(true);
		setGuessRound(0);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundsNumber={guessRound}
				onStartNewGame={startNewGameHandler}
			/>
		);
	}

	return (
		<LinearGradient
			colors={[Colors.primary500, Colors.primary600]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require("./Images/BackgroundImage.jpg")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
