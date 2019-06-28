import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import subDays from 'date-fns/sub_days'
import addDays from 'date-fns/add_days'

import { formatToDatabaseDate, parseToDate } from './common'

import { ReactComponent as NextIcon } from './svg/next.svg'
import { ReactComponent as BackIcon } from './svg/back.svg'

const Dashboard = () => {
    const [activities, setActivities] = useState([])
    const [activitiesDate, setActivitiesDate] = useState(formatToDatabaseDate)

    useEffect(() => {
        axios
            .get(
                `https://bub-tracker-758cd.firebaseio.com/activities/${activitiesDate}.json`
            )
            .then(res => res.data && setActivities([res.data]))
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

            <div>
                {activities &&
                    activities.map(activityEntry =>
                        Object.entries(activityEntry).map(activity => (
                            <div key={activity[0]}>
                                {Object.entries(activity[1]).map(
                                    (entry, index) => (
                                        <div key={index}>
                                            <p>
                                                {entry[0]}: {entry[1]}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        ))
                    )}
            </div>
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
