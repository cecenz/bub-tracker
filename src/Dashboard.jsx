import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useSelector, connect } from 'react-redux'
import axios from 'axios'
import subDays from 'date-fns/sub_days'
import addDays from 'date-fns/add_days'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import {
    formatToDatabaseDate,
    parseToDate,
    sortByKey,
    iconTheme,
} from './common'
import { themeFinder } from './themes'

import { ReactComponent as NextIcon } from './svg/next.svg'
import { ReactComponent as BackIcon } from './svg/back.svg'
import { ReactComponent as BabyIcon } from './svg/baby-girl.svg'

import ActivityCard from './ActivityCard/ActivityCard'

import './Dashboard.css'

const Dashboard = () => {
    const [activities, setActivities] = useState(
        useSelector(state => state.activity.activities)
    )
    console.log('activities', activities)
    const [activitiesDate, setActivitiesDate] = useState(formatToDatabaseDate)

    const handlePreviousDate = () =>
        setActivitiesDate(
            formatToDatabaseDate(subDays(parseToDate(activities.date), 1))
        )

    const handleNextDate = () =>
        setActivitiesDate(
            formatToDatabaseDate(addDays(parseToDate(activities.date), 1))
        )
    return (
        <>
            <DashboardHeader>
                <BackIcon
                    onClick={handlePreviousDate}
                    style={{ width: '16px', height: '16px' }}
                />
                <h1>{parseToDate(activitiesDate)}</h1>
                <NextIcon
                    onClick={handleNextDate}
                    style={{ width: '16px', height: '16px' }}
                />
            </DashboardHeader>
            <div>
                {activities.map(activity => (
                    <ThemeProvider
                        key={activity.activityInfo.timeStamp}
                        theme={themeFinder(activity.type)}
                    >
                        <ActivityCard content={activity} />
                    </ThemeProvider>
                ))}
            </div>
        </>
    )
}

const DashboardHeader = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default Dashboard
