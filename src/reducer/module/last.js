let defaultState={
	list:[]
}

export default function(state=defaultState,action){
	let copyState=Object.assign({},state);
	switch (action.type) {
		case "LAST.FETCHLIST":
			copyState.list=action.payload;
			break;
		default:
	}
	return copyState;
}