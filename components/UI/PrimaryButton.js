import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";

function PrimaryButton({ children, onPress }) {
	// function pressHandler() {
	// 	console.log("pressed");
	// }
	return (
		<View style={styles.buttonOutercontainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnercontainer, styles.pressed]
						: styles.buttonInnercontainer
				}
				onPress={onPress}
				android_ripple={{ color: "black" }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default PrimaryButton;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	buttonOutercontainer: {
		borderRadius: 28,
		overflow: "hidden",
		margin: 4,
		// maxWidth: "100%",
		backgroundColor: "red",
	},

	buttonInnercontainer: {
		backgroundColor: "#b359f0",
		paddingVertical: 10,
		paddingHorizontal: 45,
		elevation: 10,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontSize: deviceWidth < 375 ? 14 : 12,
	},
});
