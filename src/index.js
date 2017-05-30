import React,{Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducer from './reducer';

const store = createStore(reducer,applyMiddleware(thunk,promise));


import Frame from './page/Frame';

export default class Main extends Component{
	render(){
		return(
			<Provider store={store}>
				<Frame></Frame>
			</Provider>
		)
	}
}
