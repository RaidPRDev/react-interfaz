
export default (initialState) => {
    initialState =
        JSON.parse(window.localStorage.getItem('state')) || initialState;
  
    let store = {}

    return store;
};
