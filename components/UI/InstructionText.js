import { View, Text, StyleSheet } from "react-native";

function InstructionText({ children, additionStyle }) {
	return (
		<Text style={[styles.InstructionText, additionStyle]}>{children}</Text>
	);
}

export default InstructionText;

const styles = StyleSheet.create({
	textInstruction: {
		fontSize: 16,
	},
});
