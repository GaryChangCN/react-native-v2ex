import React,{Component,PropTypes} from 'react';
import {View,Text,ListView,TouchableHighlight,StyleSheet,Image} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class List extends Component{
	static defaultProps={
		list:[]
	}
	constructor(props) {
    	super(props);
	}
	renderRow(row){
		return (
			<TouchableHighlight>
				<View style={{
					borderColor:"#eee",
					height:90,
					borderBottomWidth:1,
					borderStyle:'solid',
					alignItems:'center',
					justifyContent:'space-between',
					flexDirection:'row',
					paddingLeft:10,
					paddingRight:10,
				}}>
					<View style={{
						flexDirection:'row',
						alignItems:'center'
					}}>
						<Image
							style={{width: 50, height: 50,marginRight:10}}
							source={{uri:"http://"+row.member["avatar_normal"]}}
						/>
						<Text style={{
							flexBasis:270
						}}>{row.title}</Text>
					</View>
					<View style={{
						alignSelf:'stretch'
					}}>
						<Text style={{
							backgroundColor:'#eee',
							padding:5,
							color:'#333'
						}}>
							{row.node.title}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
	render(){
		let {list}=this.props;
		console.log(JSON.stringify(list));
		let dataSource=ds.cloneWithRows(list);
		return (
			<View>
				<ListView
					enableEmptySections={true}
					dataSource={dataSource}
					renderRow={this.renderRow}
				/>
			</View>
		)
	}
}
