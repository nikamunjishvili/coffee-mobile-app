import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

const Loader = ({ loadingText }: any) => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="#0000ff" />
			{loadingText && <Text style={styles.text}>{loadingText}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		marginTop: 10,
		fontSize: 16,
	},
});

export default Loader;
