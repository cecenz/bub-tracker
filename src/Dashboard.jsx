import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import axios from 'axios'
import subDays from 'date-fns/sub_days'
import addDays from 'date-fns/add_days'

import { formatToDatabaseDate, parseToDate, sortByKey } from './common'
import { themeFinder } from './themes'

import { ReactComponent as NextIcon } from './svg/next.svg'
import { ReactComponent as BackIcon } from './svg/back.svg'
import ActivityCard from './ActivityCard'

// Next Steps:
//  1. Check for entries for everyday and display a message if there are none
//  2. Create tabs for each theme, and list those by latest
//  3. Customise each theme card and get displaying nicely

const Dashboard = () => {
    const [activities, setActivities] = useState([])
    const [activitiesDate, setActivitiesDate] = useState(formatToDatabaseDate)

    useEffect(() => {
        axios
            .get(
                `https://bub-tracker-758cd.firebaseio.com/activities/${activitiesDate}.json`
            )
            .then(res => {
                return res.data && setActivities(Object.entries(res.data))
            })
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
        <div>
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

            {sortByKey(activities, 0).map(timestamp =>
                Object.entries(timestamp[1]).map(activityType => (
                    <ThemeProvider
                        theme={themeFinder(activityType[0])}
                        key={activityType[0]}
                    >
                        <ActivityCard key={timestamp}>
                            {Object.entries(activityType[1]).map(entry => (
                                <p key={entry[1]}>
                                    {entry[0]}: {entry[1]}
                                </p>
                            ))}
                        </ActivityCard>
                    </ThemeProvider>
                ))
            )}

            {/* {activities.map(activityType => (
                <ThemeProvider
                    theme={themeFinder(activityType[0])}
                    key={activityType[0]}
                >
                    <div>
                        <h3>{activityType[0]}</h3>
                        {Object.entries(activityType[1]).map(entry => (
                            <ActivityCard>
                                {Object.entries(entry[1]).map(item => (
                                    <p>
                                        {item[0]}: {item[1]}
                                    </p>
                                ))}
                            </ActivityCard>
                        ))}
                    </div>
                </ThemeProvider>
            ))} */}
        </div>
    )
}

const DashboardHeader = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default Dashboard
