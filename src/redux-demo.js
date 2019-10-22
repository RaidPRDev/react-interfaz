import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import axios from "axios"

let usingPromiseFetch = true;

const initState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

const REDUX_PROMISE_FETCH = {
    FETCH_USERS_PREFIX: "FETCH_USERS",
    FETCH_USERS_PENDING: "FETCH_USERS_PENDING",
    FETCH_USERS_FULFILLED: "FETCH_USERS_FULFILLED",
    FETCH_USERS_ERROR: "FETCH_USERS_ERROR"
}

const REDUX_FETCH = {
    FETCH_USERS_START: "FETCH_USERS_START",
    RECEIVED_USERS: "RECEIVED_USERS",
    FETCH_USERS_REJECTED: "FETCH_USERS_REJECTED"
}

let reducer = null, 
    middleware = null,
    store = null

// 2 exmamples of using redux
// First example we use thunk to dispatch several
// actions asynchrounously.
// Second example is the use of promises via redux-promise-middleware
if (usingPromiseFetch)
{
    reducer = (state = initState, action) => {

        switch (action.type)
        {
            case REDUX_PROMISE_FETCH.FETCH_USERS_PENDING:
                return { ...state, fetching:true }
            break
    
            case REDUX_PROMISE_FETCH.FETCH_USERS_REJECTED:
                return { 
                    ...state, 
                    fetching:false, 
                    error:action.payload 
                }
            break
    
            case REDUX_PROMISE_FETCH.FETCH_USERS_FULFILLED:
                return { 
                    ...state, 
                    fetching:false, 
                    fetched: true, 
                    users:action.payload 
                }
            break
    
        }
        return state;
    }

    middleware = applyMiddleware(promise, thunk, logger)
    store = createStore(reducer, middleware)
    store.dispatch({
        type: REDUX_PROMISE_FETCH.FETCH_USERS_PREFIX,
        payload: axios.get("https://jsonplaceholder.typicode.com/users")
    })
    .catch((err) => {
        // error dispatched as REJECTED
    })
}
else 
{
    reducer = (state = initState, action) => {

        switch (action.type)
        {
            case REDUX_FETCH.FETCH_USERS_START:
                return { ...state, fetching:true }
            break
    
            case REDUX_FETCH.FETCH_USERS_ERROR:
                return { 
                    ...state, 
                    fetching:false, 
                    error:action.payload 
                }
            break
    
            case REDUX_FETCH.RECEIVED_USERS:
                return { 
                    ...state, 
                    fetching:false, 
                    fetched: true, 
                    users:action.payload 
                }
            break
    
        }
        return state;
    }

    middleware = applyMiddleware(thunk, logger)
    store = createStore(reducer, middleware)
    store.dispatch((dispatch) => { 

        dispatch({type: REDUX_FETCH.FETCH_USERS_START})
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            dispatch({type: REDUX_FETCH.RECEIVED_USERS, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: REDUX_FETCH.FETCH_USERS_ERROR, payload: err})
        })
        
    })
}




// Asynchronous Dispatches Example 01
/*
store.dispatch((dispatch) => {

    dispatch({type: REDUX_FETCH.FETCH_USERS_START})
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        dispatch({type: REDUX_FETCH.RECEIVED_USERS, payload: response.data})
    })
    .catch((err) => {
        dispatch({type: REDUX_FETCH.FETCH_USERS_ERROR, payload: err})
    })
    
})
*/

