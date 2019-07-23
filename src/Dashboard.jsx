import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import subDays from 'date-fns/sub_days'
import addDays from 'date-fns/add_days'

import { formatToDatabaseDate, parseToDate } from './common'
import { themeFinder } from './themes'

import { ReactComponent as NextIcon } from './svg/next.svg'
import { ReactComponent as BackIcon } from './svg/back.svg'

import ActivityCard from './ActivityCard/ActivityCard'

import './Dashboard.css'

const Dashboard = () => {
    const activities = useSelector(state => state.nappy.activities)
    const [activitiesDate, setActivitiesDate] = useState(formatToDatabaseDate)
    const [activitiesByDate, setActivitiesByDate] = useState(
        activities.filter(activity => activity.date === activitiesDate)
    )

    useEffect(() => {
        setActivitiesByDate(
            activities.filter(activity => activity.date === activitiesDate)
        )
    }, [activitiesDate])

    const handlePreviousDate = () =>
        setActivitiesDate(
            formatToDatabaseDate(subDays(parseToDate(activitiesDate), 1))
        )

    const handleNextDate = () =>
        setActivitiesDate(
            formatToDatabaseDate(addDays(parseToDate(activitiesDate), 1))
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
                {activitiesByDate &&
                    activitiesByDate.map(activity => (
                        <ThemeProvider
                            key={activity.activityInfo.timestamp}
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
