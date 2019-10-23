import { 
    USER_RECEIVE,
    USER_RECEIVE_PENDING,
    USER_RECEIVE_FULFILLED,
    USER_RECEIVE_REJECTED,
    USER_GET_USERNAME,
    USER_SET_USERNAME,
    USER_SET_NAME,
    USER_SET_EMAIL

} from "../constants/ActionTypes"

export function fetchUser()
{
    return {
        type: USER_RECEIVE_FULFILLED,
        payload: {
            username: "johnc",
            name: "John Cusack",
            age: 58,
            email: "fania@raidpr.com"
        }
    }
}

export function setUserName(username)
{
    return {
        type: USER_SET_USERNAME,
        payload: username
    }
}

export function setName(name)
{
    return {
        type: USER_SET_NAME,
        payload: name
    }
}

export function setEmail(email)
{
    return {
        type: USER_SET_EMAIL,
        payload: email
    }
}