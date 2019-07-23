export const createActivity = activity => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log(activity)
        const firestore = getFirestore()
        firestore
            .collection('nappy')
            .add({
                ...activity,
            })
            .then(() => {
                dispatch({ type: 'CREATE_ACTIVITY', activity })
            })
            .catch(err => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err })
            })
    }
}
