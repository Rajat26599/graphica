import { actionTypes } from "./actionTypes"

export const saveDesignRequirements = (requirements) => {
    return {
        type: actionTypes.SAVE_DESIGN_REQUIREMENTS,
        payload: requirements
    }
}

export const saveAllDesignRequirements = (requirements) => {
    return {
        type: actionTypes.SAVE_ALL_DESIGN_REQUIREMENTS,
        payload: requirements
    }
}