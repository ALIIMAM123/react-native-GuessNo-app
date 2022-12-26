import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		// fontWeight: "bold",
		fontFamily: "raleway-blackItalic",
		color: Colors.titleColor,
		borderWidth: 2,
		// borderTopWidth: 0,
		// borderLeftWidth: 0,
		// borderRightWidth: 0,
		borderColor: Colors.borderColor,
		borderRadius: 6,
		padding: 4,
		textAlign: "center",
		marginTop: 16,
		// maxWidth: "80%",
		maxWidth: "80%",
		width: 300,
	},
});
