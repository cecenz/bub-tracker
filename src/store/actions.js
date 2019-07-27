/* eslint-disable import/prefer-default-export */
export const createActivity = activity => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore
            .collection('activities')
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
