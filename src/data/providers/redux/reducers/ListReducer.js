// ListReducer
import { 
    LIST_RECEIVE,
    LIST_RECEIVE_PENDING,
    LIST_RECEIVE_FULFILLED,
    LIST_RECEIVE_REJECTED,
    LIST_UPDATE

} from "../constants/ActionTypes"

export default function reducer(state = {
    items: [],
    fetching: false,
    fetched: false,
    error: false

}, action) {
    

    switch (action.type)
    {
        case LIST_RECEIVE_PENDING:
            return { ...state, fetching: true }
        break;

        case LIST_RECEIVE_FULFILLED:
            return { 
                ...state, 
                fetching: false, 
                fetched: true, 
                items: action.payload 
            }
        break;

        case LIST_RECEIVE_REJECTED:
            return { ...state, fetching: false, error: action.payload }
        break;

        case LIST_UPDATE:
            return { ...state, items: action.payload }
        break;

    }

    return state
}