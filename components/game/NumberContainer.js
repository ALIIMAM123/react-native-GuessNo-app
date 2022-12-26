import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.titleColor,
		// padding: 24,
		padding: deviceWidth < 375 ? 12 : 24,
		borderRadius: 8,
		margin: deviceWidth < 375 ? 12 : 24,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: Colors.titleColor,
		fontSize: deviceWidth < 375 ? 20 : 24,
		fontWeight: "bold",
	},
});
