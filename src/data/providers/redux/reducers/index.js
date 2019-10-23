import { combineReducers } from "redux"

import profile from "./UserReducer"
import list from "./ListReducer"

export default combineReducers({
    profile,
    list
})