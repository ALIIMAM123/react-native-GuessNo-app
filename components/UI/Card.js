import { View, StyleSheet } from "react-native";

function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
	card: {
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
});
