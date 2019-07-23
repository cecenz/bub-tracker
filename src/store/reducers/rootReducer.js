import { combineReducers } from 'redux'
import { fireStoreReducer } from 'redux-firestore'
import authReducer from './authReducer'
import nappyReducer from '../../Nappy/store/reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    nappy: nappyReducer,
    firestore: fireStoreReducer,
})

export default rootReducer
