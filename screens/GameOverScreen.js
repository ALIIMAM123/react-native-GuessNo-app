import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";

function GameOverScreeen({ roundsNumber, userNumber, onStartNewGame }) {
	return (
		<View style={styles.rootContainer}>
			<Title>Game Over</Title>
			<View style={styles.imageContainer}>
				<Image
					source={require("../Images/GameOver.jpg")}
					style={styles.Image}
				/>
			</View>
			<Text style={styles.textDesc}>
				Your phone Needed <Text style={styles.noOfRound}>{roundsNumber} </Text>{" "}
				rounds to guess the <Text style={styles.noOfRound}>{userNumber}</Text>{" "}
				Number
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
		</View>
	);
}

export default GameOverScreeen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 20,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		width: 250,
		height: 250,
		borderRadius: 125,
		borderColor: Colors.primary600,
		overflow: "hidden",
		backgroundColor: "red",
		margin: 36,
	},
	Image: {
		height: "100%",
		width: "100%",
	},
	textDesc: {
		fontSize: 14,
		fontFamily: "raleway-blackItalic",
		textAlign: "center",
		marginBottom: 10,
	},

	noOfRound: {
		color: "red",
		fontSize: 20,
	},
});
