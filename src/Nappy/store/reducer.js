const initState = {
    activities: [
        {
            date: '2019-07-26',
            type: 'nappy',
            id: '123000',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-07-25',
            type: 'nappy',
            id: '123030',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-07-24',
            type: 'nappy',
            id: '153100',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-07-24',
            type: 'nappy',
            id: '123107',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-06-24',
            type: 'nappy',
            id: '123900',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
    ],
}

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
