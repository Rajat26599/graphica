import { actionTypes } from "./actionTypes"

export const setUserData = (userData) => {
    return {
        type: actionTypes.SET_USER_DATA,
        payload: userData
    }
}

export const setLogin = (isLogin) => {
    return {
        type: actionTypes.SET_LOGIN,
        payload: isLogin
    }
}
