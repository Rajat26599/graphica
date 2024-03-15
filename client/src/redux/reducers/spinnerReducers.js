import { actionTypes } from "../actions/actionTypes"

const initialState = {
    isLoading: false,
}

export const spinnerReducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}