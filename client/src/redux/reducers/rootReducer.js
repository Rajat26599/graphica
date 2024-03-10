import { combineReducers } from 'redux'
import { authReducers } from './authReducers'
import { designRequirementsReducers } from './designRequirementsReducers'

const rootReducer = combineReducers({ authReducers, designRequirementsReducers })

export default rootReducer