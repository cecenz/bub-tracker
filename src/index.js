import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {
    createFirestoreInstance,
    getFirestore,
    reduxFirestore,
} from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import rootReducer from './store/reducers/rootReducer'

const config = {
    apiKey: 'AIzaSyB2G8f95hL5Nn2GMLR8rgO2jmDDe3kyrnQ',
    authDomain: 'bub-tracker-758cd.firebaseapp.com',
    databaseURL: 'https://bub-tracker-758cd.firebaseio.com',
    projectId: 'bub-tracker-758cd',
    storageBucket: '',
    messagingSenderId: '175383094123',
    appId: '1:175383094123:web:7fbaab9fdaa87f3c',
}
firebase.initializeApp(config)

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore })),
        reduxFirestore(firebase)
    )
)
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // <- needed if using firestore
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
