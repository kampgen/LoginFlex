import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import Container from './app/components/Container'

export default class projetoFlex extends Component {
  render() {
    return (
	
			<View style={styles.container}>
				<Container />
			</View>
	
			);
			}
			}

const styles = StyleSheet.create({
	scrollview: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'stretch'
	},
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('projetoFlex', () => projetoFlex);
