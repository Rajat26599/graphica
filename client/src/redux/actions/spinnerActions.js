import { actionTypes } from "./actionTypes"

export const setIsLoading = (bool) => {
    return {
        type: actionTypes.SET_IS_LOADING,
        payload: bool
    }
}