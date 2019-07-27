const initState = {}

const activityReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ACTIVITY':
            return state
        case 'CREATE_PROJECT_ERROR':
            return state
        default:
            return state
    }
}

export default activityReducer
