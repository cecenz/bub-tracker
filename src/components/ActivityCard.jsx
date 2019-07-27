import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { iconTheme } from '../common/themes'

const NappyInfo = ({ content }) => {
    return (
        <StyledActivityCard>
            <ActivityIcon>
                {iconTheme(content.type, { width: '24px', height: '24px' })}
            </ActivityIcon>
            <ActivityContent>
                <p>{content.nappy}</p>
                <p>{content.notes}</p>
            </ActivityContent>
        </StyledActivityCard>
    )
}

const SleepInfo = ({ content }) => {
    return (
        <StyledActivityCard>
            <ActivityIcon>
                {iconTheme(content.type, { width: '24px', height: '24px' })}
            </ActivityIcon>
            <ActivityContent>
                <p>
                    {content.startTime} - {content.endTime}
                </p>
                <p>{content.totalTime}</p>
                <p>{content.notes}</p>
            </ActivityContent>
        </StyledActivityCard>
    )
}

const ActivityInfo = ({ content }) => {
    return (
        <StyledActivityCard>
            <ActivityIcon>
                {iconTheme(content.type, { width: '24px', height: '24px' })}
            </ActivityIcon>
            <ActivityContent>
                <p>{content.time}</p>
                <p>{content.notes}</p>
            </ActivityContent>
        </StyledActivityCard>
    )
}

const ActivityCard = ({ content }) => {
    let component
    switch (content.type) {
        case 'sleep':
            component = <SleepInfo content={content} />
            break
        case 'nappy':
            component = <NappyInfo content={content} />
            break
        case 'activity':
            component = <ActivityInfo content={content} />
            break
        default:
            break
    }
    return <Card>{component}</Card>
}

const StyledActivityCard = styled.div`
    display: flex;
    align-items: center;
`

const ActivityIcon = styled.div`
    padding-right: 0.5rem;
    vertical-align: middle;
`

const ActivityContent = styled.div`
    margin-left: 0.5rem;
`

export default ActivityCard
