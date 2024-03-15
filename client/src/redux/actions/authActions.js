import { actionTypes } from "./actionTypes"

export const setUserData = (userData) => {
    return {
        type: actionTypes.SET_USER_DATA,
        payload: userData
    }
}

export const clearUserData = () => {
    return {
        type: actionTypes.SET_USER_DATA
    }
}

export const setLogin = (isLogin) => {
    return {
        type: actionTypes.SET_LOGIN,
        payload: isLogin
    }
}

export const showAuthModal = (bool) => {
    return {
        type: actionTypes.SHOW_AUTH_MODAL,
        payload: bool
    }
}
