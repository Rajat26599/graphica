import { combineReducers } from 'redux'
import { authReducers } from './authReducers'
import { designRequirementsReducers } from './designRequirementsReducers'
import { spinnerReducers } from './spinnerReducers'

const rootReducer = combineReducers({ 
    authReducers, 
    designRequirementsReducers, 
    spinnerReducers,
})

export default rootReducer