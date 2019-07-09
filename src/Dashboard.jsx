import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import axios from 'axios'
import subDays from 'date-fns/sub_days'
import addDays from 'date-fns/add_days'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { formatToDatabaseDate, parseToDate, sortByKey } from './common'
import { themeFinder } from './themes'

import { ReactComponent as NextIcon } from './svg/next.svg'
import { ReactComponent as BackIcon } from './svg/back.svg'
import ActivityCard from './ActivityCard'

// Next Steps:
//  - Customise each theme card and get displaying nicely

const Dashboard = () => {
    const [activities, setActivities] = useState([])
    const [activitiesDate, setActivitiesDate] = useState(formatToDatabaseDate)
    const [activitiesByTheme, setActivitiesByTheme] = useState({})
    useEffect(() => {
        axios
            .get(
                `https://bub-tracker-758cd.firebaseio.com/activities/${activitiesDate}.json`
            )
            .then(res => {
                return res.data
                    ? setActivities(Object.entries(res.data))
                    : setActivities([])
            })
    }, [activitiesDate])

    useEffect(() => {
        const nappyArray = []
        const sleepArray = []
        activities.map(timestamp =>
            Object.entries(timestamp[1]).map(activityType =>
                activityType[0] === 'nappy'
                    ? nappyArray.push(activityType)
                    : sleepArray.push(activityType)
            )
        )
        setActivitiesByTheme({ nappy: nappyArray, sleep: sleepArray })
    }, [activities])

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
            <Tabs>
                <TabList>
                    <Tab>All</Tab>
                    {Object.entries(activitiesByTheme).map(activityType => (
                        <Tab key={activityType[0]}>{activityType[0]}</Tab>
                    ))}
                </TabList>
                <TabPanel>
                    {sortByKey(activities, 0).map(timestamp =>
                        Object.entries(timestamp[1]).map(activityType => (
                            <ThemeProvider
                                theme={themeFinder(activityType[0])}
                                key={activityType[0]}
                            >
                                <ActivityCard key={timestamp}>
                                    {Object.entries(activityType[1]).map(
                                        entry => (
                                            <p key={entry[1]}>
                                                {entry[0]}: {entry[1]}
                                            </p>
                                        )
                                    )}
                                </ActivityCard>
                            </ThemeProvider>
                        ))
                    )}
                </TabPanel>
                {Object.entries(activitiesByTheme).map(activityType => (
                    <TabPanel key={activityType[0]}>
                        {activityType[1].map(activity => (
                            <ThemeProvider theme={themeFinder(activityType[0])}>
                                <ActivityCard>
                                    {Object.entries(activity[1]).map(entry => (
                                        <p key={entry[1]}>
                                            {entry[0]}: {entry[1]}
                                        </p>
                                    ))}
                                </ActivityCard>
                            </ThemeProvider>
                        ))}
                    </TabPanel>
                ))}
            </Tabs>
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