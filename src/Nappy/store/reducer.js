const initState = {}

const nappyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ACTIVITY':
            console.log(action.activity)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        default:
            return state
    }
}

export default nappyReducer
