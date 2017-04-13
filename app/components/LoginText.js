import React, { Component } from 'react'

import {
	TextInput
} from 'react-native'

class LoginTextInput extends Component{
	constructor(props) {
		super(props);
		this.state = { text: this.props.text}
	}
	render() {
		return (
			<TextInput
				style={{height: 40, fontSize: 20, paddingLeft: 10}}
				onChangeText={(text) => this.setState({text})}
				defaultValue={this.state.text}
				underlineColorAndroid={'white'}
			/>
		);
	}
}
export default LoginTextInput
