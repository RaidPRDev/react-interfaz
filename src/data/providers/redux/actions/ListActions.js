import axios from "axios"

import { 
    LIST_RECEIVE,
    LIST_RECEIVE_PENDING,
    LIST_RECEIVE_FULFILLED,
    LIST_RECEIVE_REJECTED,
    LIST_UPDATE

} from "../constants/ActionTypes"

export function fetchList()
{
    return function(dispatch) 
    { 
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            dispatch({type: LIST_RECEIVE_FULFILLED, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: LIST_RECEIVE_REJECTED, payload: err})
        })
    }
}

export function updateList(listData)
{
    return {
        type: LIST_UPDATE,
        payload: listData
    }
}
