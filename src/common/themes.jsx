import React from 'react'

import { ReactComponent as Activity } from '../svg/activity.svg'
import { ReactComponent as SleepIcon } from '../svg/sleep.svg'
import { ReactComponent as FeedIcon } from '../svg/feedBottle.svg'
import { ReactComponent as Media } from '../svg/camera.svg'
import { ReactComponent as NappyIcon } from '../svg/nappy.svg'
import { ReactComponent as BabyIcon } from '../svg/baby-girl.svg'

export const feed = {
    color: '#F8F087',
    highlight: '#FDF58C',
    shadow: '#E9E178',
}

export const activity = {
    color: '#B7E3C0',
    highlight: '#BCE8C5',
}

export const media = {
    color: '#B8D0DD',
    highlight: '#BDD5E2',
}

export const nappy = {
    color: '#DBBAE5',
    highlight: '#E0BFEA',
}

export const sleep = {
    color: '#F39DD4',
    highlight: '#F8A2D9',
}

export const iconTheme = (theme, styles) => {
    let icon
    switch (theme.toLowerCase()) {
        case 'nappy':
            icon = <NappyIcon style={styles} />
            break
        case 'sleep':
            icon = <SleepIcon style={styles} />
            break
        case 'feed':
            icon = <FeedIcon style={styles} />
            break
        case 'activity':
            icon = <Activity style={styles} />
            break
        case 'media':
            icon = <Media style={styles} />
            break
        default:
            icon = <BabyIcon style={{ width: '16px', height: '16px' }} />
            break
    }

    return icon
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
