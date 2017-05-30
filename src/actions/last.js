const FETCHLIST="LAST.FETCHLIST"

import {fetchLastList} from '../service/http';

export async function fetchList() {
	let list=await fetchLastList();
    return (dispatch) => {
        dispatch({
            type: FETCHLIST,
            payload: list
        });
    }
}
