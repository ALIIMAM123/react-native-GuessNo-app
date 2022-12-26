import { useState } from "react";
import {
	TextInput,
	View,
	StyleSheet,
	Text,
	Alert,
	Dimensions,
} from "react-native";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";

function GameStartScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	// Reading Input field
	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}

	//  confirm button function
	function confirmInputHandler() {
		// console.log("Pressed");
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
			Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
			]);
			return;
		}

		// changing screen programatically
		onPickNumber(chosenNumber);
		console.log("Valid Number");
	}

	// Reset Inputfield on pressing okay (alertBox)
	function resetInputHandler() {
		setEnteredNumber("");
	}

	return (
		<View style={styles.rootContainer}>
			{/* <Title style={styles.textGuessNumber}>hdhgcvg<Title> */}
			<Title>Guess My Number</Title>
			<Card>
				<Text style={styles.textInstruction}>Enter a Number</Text>
				<TextInput
					style={styles.numberInput}
					underlineColorAndroid="transparent"
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={numberInputHandler}
					value={enteredNumber}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>
							<Text style={styles.textButton}>Reset</Text>
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>
							<Text style={styles.textButton}>Confirm</Text>
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

export default GameStartScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		alignItems: "center",
		marginTop: 100,
		marginTop: deviceHeight < 375 ? 10 : 20,
	},
	textInstruction: {
		fontSize: 16,
	},

	numberInput: {
		height: 50,
		fontSize: 32,
		borderBottomColor: "#e9eaf2",
		color: "black",
		borderBottomWidth: 2,
		marginVertical: 8,
		fontWeight: "bold",
		width: 50,
		textAlign: "center",
	},

	buttonsContainer: {
		flexDirection: "row",
		// justifyContent: "space-between",
	},
	buttonContainer: {
		flex: 1,
		// backgroundColor: "red",
	},
	textButton: {
		fontSize: 13,
		fontWeight: "bold",
	},
});
