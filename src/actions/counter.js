import {counter} from './namespace';
const {INCREASE,DECREASE}=counter;

export function increase() {
    return (dispatch) => {
        dispatch({
            type: INCREASE,
            payload: { value: 1 }
        });
    }
}

export function decrease() {
    return (dispatch) => {
        dispatch({
            type: DECREASE,
            payload: { value: 1 }
        });
    }
}
