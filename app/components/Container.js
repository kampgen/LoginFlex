import React, { Component } from 'react'

import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native'

import LocalImage from './Imagens'
import LoginTextInput from './LoginText'

export default class Container extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.intro}>
					<View style={styles.title}>
						<Text style={[styles.textWhite, {fontSize: 34, fontWeight: 'bold'}]}>SAMPLE TEXT</Text>
						<Text style={[styles.textWhite, {fontSize: 18}]}>Lorem ipsum dolor sit amet</Text>
					</View>
					<LocalImage imagem="pikachu" source={require('../assets/Avatar.png')} />
					<View style={styles.login}>
						<Text style={[styles.textWhite, {fontSize: 24, fontWeight: 'bold'}]}>LOG IN</Text>
					</View>
				</View>
				<View style={styles.nameBox}>
					<View style={{width: 65, backgroundColor: '#5fc4bc', justifyContent: 'center', alignItems: 'center'}}>
						<LocalImage imagem="login" source={require('../assets/User.png')} />
					</View>
					<View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
						<LoginTextInput text="Name" />
					</View>
				</View>
				<View style={styles.passwordBox}>
					<View style={{width: 65, backgroundColor: '#5fc4bc', justifyContent: 'center', alignItems: 'center'}}>
						<LocalImage imagem="login" source={require('../assets/Password.png')} />
					</View>
					<View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
						<LoginTextInput text="Password" />
					</View>
				</View>
				<View style={styles.remember}>
					<LocalImage imagem="checked" source={require('../assets/Checked.png')} />
					<Text style={styles.textWhite}>  Remember me</Text>
				</View>
				<View style={styles.forgotPassword}>
					<Text style={[styles.textWhite, {color: '#aeb1c2', textDecorationLine: 'underline'}]}>Forgot your password?</Text>
				</View>
				<View style={styles.nextBox}>
					<Text style={[styles.textWhite, {fontWeight: 'bold'}]}>NEXT</Text>
				</View>
				<View style={styles.description}>
					<Text numberOfLines={1} style={[styles.textWhite, {fontSize: 14}]}>Lorem ipsum dolor sit amet im fetuni deziren lucina</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#505c76',
		alignSelf: 'stretch'
	},
	textWhite : {
		color: 'white',
		fontFamily: 'Sans-serif',
		fontSize: 20
	},
	intro: {
		flex: 5,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	title: {
		alignItems: 'center',
		flex: 1,
		paddingTop: 15,
		paddingBottom: 10
	},
	login: {
		flex: 1,
		justifyContent: 'center'
	},
	nameBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		marginHorizontal: 40,
		marginVertical: 10
	},
	passwordBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		marginHorizontal: 40,
		backgroundColor: 'green'
	},
	remember: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center'
	},
	forgotPassword: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	nextBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#5fc4bc',
		marginHorizontal: 40
	},
	description: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}

});
