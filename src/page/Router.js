import React,{Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';
import {View} from 'react-native';

import Last from './Last.js';

class Default extends Component{
	render(){
		return (
			<View style={{flex:1}}>
				<Router key="root">
					<Scene key="Last" component={Last} initial={true} hideNavBar={true}/>
				</Router>
			</View>
		)
	}
}

export default Default;