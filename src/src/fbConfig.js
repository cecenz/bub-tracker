import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyB2G8f95hL5Nn2GMLR8rgO2jmDDe3kyrnQ',
    authDomain: 'bub-tracker-758cd.firebaseapp.com',
    databaseURL: 'https://bub-tracker-758cd.firebaseio.com',
    projectId: 'bub-tracker-758cd',
    storageBucket: '',
    messagingSenderId: '175383094123',
    appId: '1:175383094123:web:7fbaab9fdaa87f3c',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
