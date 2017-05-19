import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	ViewStyle,
	TextStyle,
	AppRegistry,
} from 'react-native';

interface Props {

}

interface State {

}

export default class App extends React.Component<Props, State> {
	onPress() {
		alert('press');
	}

	render() {
		return (
			<TouchableOpacity style={styles.container} onPress={this.onPress.bind(this)}>
				<Text style={styles.welcome}>
					Demo 2
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload, {'\n'}
					Cmd+D or shake for dev menu
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	} as ViewStyle,

	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	} as TextStyle,

	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	} as TextStyle,
});

AppRegistry.registerComponent('ReactNativeTS', () => App);
