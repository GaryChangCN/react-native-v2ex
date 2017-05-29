import React,{Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer,applyMiddleware(thunk));


import Router from './page/Router';

export default class Main extends Component{
	render(){
		return(
			<Provider store={store}>
				<Router></Router>
			</Provider>
		)
	}
}
