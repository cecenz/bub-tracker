import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './authReducer'
import nappyReducer from '../../Nappy/store/reducer'

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    auth: authReducer,
    nappy: nappyReducer,
})

export default rootReducer
