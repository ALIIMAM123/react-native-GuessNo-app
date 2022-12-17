import { TextInput, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameStartScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				underlineColorAndroid="transparent"
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton>
						<Text style={styles.textButton}>Reset</Text>
					</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton>
						<Text style={styles.textButton}>Start</Text>
					</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

export default GameStartScreen;

const styles = StyleSheet.create({
	inputContainer: {
		// flex: 1,
		backgroundColor: "white",
		padding: 16,
		marginTop: 100,
		marginHorizontal: 15,
		borderRadius: 10,
		elevation: 22,
		// below for shodow in iOS
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.28,
		alignItems: "center",
		justifyContent: "center",
	},
	numberInput: {
		height: 50,
		fontSize: 32,
		borderBottomColor: "#e9eaf2",
		color: "white",
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
		fontSize: 14,
		fontWeight: "bold",
	},
});
