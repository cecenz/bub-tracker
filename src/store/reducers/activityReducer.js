const initState = {
    activities: [
        {
            date: '2019-06-27',
            type: 'nappy',
            activityInfo: {
                timestamp: '123000',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-06-27',
            type: 'nappy',
            activityInfo: {
                timestamp: '123100',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-06-27',
            type: 'nappy',
            activityInfo: {
                timestamp: '123100',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
        {
            date: '2019-06-28',
            type: 'nappy',
            activityInfo: {
                timestamp: '123100',
                nappy: 'wet',
                notes: 'foobar',
            },
        },
    ],
}

const activityReducer = (state = initState, action) => {
    return state
}

export default activityReducer
