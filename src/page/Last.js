import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import List from '../components/List';

class Last extends Component{
	componentDidMount(){
		this.props.fetchList();
	}
	render(){
		let {list}=this.props;
		return(
			<View style={{flex:1}}>
				<List list={list}></List>
			</View>
		)
	}
}
function mapStateToProps(state){
	let thisState=state.last;
	return {
		list:thisState.list
	}
}

import {fetchList} from '../actions/last';

function mapDispatchToProps(dispatch){
	return{
		fetchList(){
			dispatch(fetchList());
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Last)