import { StyleSheet, ImageBackground } from "react-native";

import StartGameScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
	return (
		<LinearGradient colors={["#D8B5FF", "#1EAE98"]} style={styles.rootScreen}>
			<ImageBackground
				source={require("./Images/BackgroundImage.jpg")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<StartGameScreen />
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
