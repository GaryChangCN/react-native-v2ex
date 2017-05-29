import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';

class Header extends Component{
	constructor(props){
		super(props);
		this.style=this.style.bind(this);
	}
	style(){
		let {color}=this.props;
		return{
			view:{
				backgroundColor:color.a,
				height:50,
				alignSelf:'stretch',
				alignItems:'center',
				justifyContent:'center'
			},
			text:{
				color:color.w,
				fontSize:25
			}
		}
	}
	render(){
		let style=this.style();
		return(
			<View style={style.view}>
				<Text style={style.text}>V2EX</Text>
			</View>
		)
	}
}

function mapPropsToState(state){
	return {
		color:state.color
	}
}

export default connect(mapPropsToState,null)(Header)