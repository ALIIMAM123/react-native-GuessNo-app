import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
	return (
		<View style={styles.listItem}>
			<Text style={styles.innerText}>#{roundNumber}</Text>
			<Text style={styles.innerText}>Opponent`s Guess : {guess} </Text>
		</View>
	);
}

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.borderColor,
		borderWidth: 1,
		borderRadius: 40,
		padding: 10,

		backgroundColor: "white",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		marginTop: 8,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		shadowRadius: 3,
		//
	},
	innerText: {
		fontFamily: "raleway-blackItalic",
		fontSize: 8,
	},
});
