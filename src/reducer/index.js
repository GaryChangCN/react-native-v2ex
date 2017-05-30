import {combineReducers} from 'redux';

import color from './module/color';
import last from './module/last';

export default combineReducers({
	color,
	last
});