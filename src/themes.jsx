export const feed = {
    color: '#F8F087',
    highlight: '#FDF58C',
    shadow: '#E9E178',
}

export const green = {
    color: '#B7E3C0',
    highlight: '#BCE8C5',
}

export const nappy = {
    color: '#B8D0DD',
    highlight: '#BDD5E2',
}

export const sleep = {
    color: '#DBBAE5',
    highlight: '#E0BFEA',
}

export const pink = {
    color: '#F39DD4',
    highlight: '#F8A2D9',
}

export const themeFinder = activityType => {
    switch (activityType) {
        case 'nappy':
            return nappy
        case 'sleep':
            return sleep
        default:
            return null
    }
}
