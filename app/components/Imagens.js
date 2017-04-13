	import React, { Component } from 'react'

	import {
		Image
	} from 'react-native'

	export default class LocalImage extends Component {
	render() {
				switch (this.props.imagem) {
					case "pikachu":
						return <Image source={this.props.source} style={{width: 125.6, height: 145.2}} />
					case "login":
						return <Image source={this.props.source} style={{width: 35.5, height: 42.7}} />
					case "checked":
						return <Image source={this.props.source} style={{width: 30, height: 25}} />
					default:
						return "No icon"

				}
}
}
