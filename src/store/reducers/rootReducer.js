import { combineReducers } from 'redux'

import authReducer from './authReducer'
import activityReducer from './activityReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    activity: activityReducer,
})

export default rootReducer
