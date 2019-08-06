import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import subDays from 'date-fns/sub_days'
import addDays from 'date-fns/add_days'
import { firestoreConnect } from 'react-redux-firebase'

import { formatToDatabaseDate, parseToDate } from '../../common/common'
import { themeFinder } from '../../common/themes'

import { ReactComponent as NextIcon } from '../../svg/next.svg'
import { ReactComponent as BackIcon } from '../../svg/back.svg'

import ActivityCard from '../ActivityCard'
import Header from '../Header'

import './Dashboard.css'

const Dashboard = ({ history }) => {
    const activities = useSelector(state => state.firestore.ordered.activities)
    const [activitiesDate, setActivitiesDate] = useState(formatToDatabaseDate)
    const [activitiesByDate, setActivitiesByDate] = useState()

    useEffect(() => {
        setActivitiesByDate(
            activities &&
                activities.filter(activity => activity.date === activitiesDate)
        )
    }, [activities, activitiesDate])

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
            <Header history={history} />
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
                            key={activity.id}
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

export default firestoreConnect(['activities'])(Dashboard)
