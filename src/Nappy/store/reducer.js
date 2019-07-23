const initState = {
    activities: [
        {
            date: '2019-07-23',
            type: 'nappy',
            id: '123000',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-07-23',
            type: 'nappy',
            id: '123030',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-07-22',
            type: 'nappy',
            id: '153100',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-07-21',
            type: 'nappy',
            id: '123107',
            activityInfo: {
                time: '1:32pm',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-06-28',
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
