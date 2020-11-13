
import React from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native'


export default function App(){
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Digital Innovation One</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		margin: 10,
		color: '#000000'
	},
});

