import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';

import Point from './point';

export default class App extends React.Component<{}, {}> {
	private onPress() {
		alert('press demo 1 d ss dd');
	}

	public render() {
		const p1: Point = new Point(3, 5);
		const p2: Point = new Point(5, 5);
		return (
			<TouchableOpacity style={styles.container} onPress={this.onPress.bind(this)}>
				<Text style={styles.welcome}>
					Demo1  {p1.show()} {p2.show()}
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
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		flex: 1,
		justifyContent: 'center',
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
