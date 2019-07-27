import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './authReducer'
import activityReducer from './activityreducer'

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    auth: authReducer,
    activities: activityReducer,
})

export default rootReducer
