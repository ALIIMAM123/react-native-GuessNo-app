import { useState, useEffect } from "react";

import {
	StyleSheet,
	View,
	Text,
	Alert,
	FlatList,
	Dimensions,
} from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";

import Colors from "../constants/colors";

import { FontAwesome } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
	const randomNum = Math.floor(Math.random() * (max - min)) + min;

	if (randomNum === exclude) {
		return generateRandomNumber(min, max, exclude);
	} else {
		return randomNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomNumber(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	//
	const [guessRound, setGuessRound] = useState([initialGuess]);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRound.length);
		}
	}, [currentGuess, userNumber, onGameOver]);

	useEffect(() => {
		(minBoundary = 1), (maxBoundary = 100);
	}, []);

	function nextGuessHandler(direction) {
		if (
			(direction === "LOWER_NO_REQUIRED" && currentGuess < userNumber) ||
			(direction === "GREATER_NO_REQUIRED" && currentGuess > userNumber)
		) {
			Alert.alert("Don't Lie", "You know this is wrong ... ", [
				{ text: "Sorry!", style: "Cancel" },
			]);

			return;
		}

		if (direction === "LOWER_NO_REQUIRED") {
			//if number should be lower (gernerate lower number)
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		// console.log(minBoundary, maxBoundary, "checkkk");

		const newRandomNumber = generateRandomNumber(
			minBoundary,
			maxBoundary,
			currentGuess,
		);

		setCurrentGuess(newRandomNumber);
		setGuessRound((prevGuessRound) => [
			// { text: newRandomNumber, id: guessRound },
			newRandomNumber,
			...prevGuessRound,
		]);
	}

	const guestRoundListLength = guessRound.length;

	return (
		<View style={styles.screen}>
			<Title style={styles.title}> Opponent`s Screen</Title>
			{/* Guess component */}
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText additionStyle={styles.aditionStyle}>
					Higher or Lower ?
				</InstructionText>
				<View style={styles.controllerButton}>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, "LOWER_NO_REQUIRED")}
					>
						<FontAwesome name="minus" size={12} color="white" />
					</PrimaryButton>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, "GREATER_NO_REQUIRED")}
					>
						<FontAwesome name="plus" size={12} color="white" />
					</PrimaryButton>
				</View>
			</Card>
			<View style={styles.flatScrollContainer}>
				{/* {guessRound.map((guessRound) => (
					<Text key={guessRound}>{guessRound}</Text>
				))} */}
				<FlatList
					data={guessRound}
					showsVerticalScrollIndicator={false}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guestRoundListLength - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(itemData) => itemData}
				/>
			</View>
		</View>
	);
}

export default GameScreen;

const deviceWidth = Dimensions.get("window");

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		// padding: 40,
		padding: deviceWidth < 375 ? 25 : 10,
		marginTop: deviceWidth < 375 ? 25 : 30,
		alignItems: "center",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.titleColor,
		borderWidth: 2,

		borderColor: Colors.borderColor,
		borderRadius: 6,
		padding: 4,
		textAlign: "center",
		marginTop: 16,
	},
	controllerButton: {
		flexDirection: "row",
		borderWidth: 3,
		borderColor: Colors.borderColor,
		alignItems: "center",
		justifyContent: "space-evenly",
		padding: 0,
	},

	aditionStyle: {
		marginBottom: 10,
	},

	flatScrollContainer: {
		// backgroundColor: "red",
		marginTop: 10,
		// height: "100%",
		flex: 1,
		padding: 16,
		overflow: "hidden",
	},
	flat: {},
});
