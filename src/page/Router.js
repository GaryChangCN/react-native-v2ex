import React,{Component} from 'react';
import {View,StatusBar} from 'react-native';
import {connect} from 'react-redux';

import {pageContainer,color} from '../style';
import Header from '../components/Header';

class Router extends Component{
	render(){
		let {color} =this.props;
		const indexContainer={
			backgroundColor:color.w,
			flex:1,
			flexDirection:'column'
		}
		return (
			<View style={Object.assign(pageContainer,indexContainer)}>
				<StatusBar
					backgroundColor={color.a2}
				/>
				<Header></Header>
			</View>
		)
	}
}
function mapPropsToState(state){
	return {
		color:state.color
	}
}
export default connect(mapPropsToState,null)(Router);