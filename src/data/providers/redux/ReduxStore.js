/*

import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "./reducers"

const middleware = applyMiddleware(promise, thunk, logger)

export default createStore(reducer, middleware)


*/

import { compose, createStore, applyMiddleware } from 'redux';
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "./reducers"

export default (initialState) => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
  const middleware = [promise, thunk, logger];

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //  window.__REDUX_DEVTOOLS_EXTENSION__() 
    )
  );

  
  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total
    };

    window.localStorage.setItem('state', JSON.stringify(persist));
  });
  

  return store;
};
