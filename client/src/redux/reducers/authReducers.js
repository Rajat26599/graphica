import { actionTypes } from "../actions/actionTypes"

const initialState = {
    userData: {
        usreName: null,
        roles: null,
    },
    isLogin: false,
}

export const authReducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_USER_DATA:
            return {...state, userData: action.payload}
        case actionTypes.CLEAR_USER_DATA:
            return {...state, userData: initialState.userData}
        case actionTypes.SET_LOGIN:
            return {...state, isLogin: action.payload}
        default:
            return state
    }
}