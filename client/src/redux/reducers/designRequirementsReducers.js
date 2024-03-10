import { actionTypes } from "../actions/actionTypes"

const initialState = {
    designRequirements: [],
    allDesignRequirements: []
}

export const designRequirementsReducers = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SAVE_DESIGN_REQUIREMENTS:
            return {...state, designRequirements: action.payload}
        case actionTypes.SAVE_ALL_DESIGN_REQUIREMENTS:
            return {...state, allDesignRequirements: action.payload}
        default: 
            return state
    }
}