import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import { createActivity } from '../store/actions'
import { displayTime, selectTime, formatToDatabaseDate } from '../common/common'

import Card from '../components/Card'

const convertDuration = totalTime => {
    const totalTimeDecimal = totalTime.toFixed(2).split('.')
    const formattedTime = `${totalTimeDecimal[0]} hours, ${(
        totalTimeDecimal[1] * 0.6
    ).toString()} minutes`
    return formattedTime
}
function SecondsToHours(timeInSeconds) {
    const pad = (num, size) => {
        return `000${num}`.slice(size * -1)
    }
    const time = parseFloat(timeInSeconds).toFixed(3)
    const hours = Math.floor(time / 60 / 60)
    const hoursSuffix = hours >= 12 ? 'pm' : 'am'
    const minutes = Math.floor(time / 60) % 60

    return `${pad(hours, 2)}:${pad(minutes, 2)} ${hoursSuffix}`
}

const Sleep = ({ history }) => {
    const dispatch = useDispatch()

    const [totalTime, setTotalTime] = useState(false)
    const handleTimeChange = (startTime, endTime) => {
        const chosenStartTime = parseInt(startTime)
        const chosenEndtartTime = parseInt(endTime)
        const updatedTotalTime =
            chosenStartTime > chosenEndtartTime
                ? (86400 - chosenStartTime + chosenEndtartTime) / 3600
                : (chosenEndtartTime - chosenStartTime) / 3600

        const convertedDuration = convertDuration(updatedTotalTime)
        setTotalTime(convertedDuration)
    }

    return (
        <Card>
            <Formik
                initialValues={{}}
                onSubmit={values => {
                    dispatch(
                        createActivity({
                            date: formatToDatabaseDate(new Date()),
                            type: 'sleep',
                            time: displayTime(new Date()),
                            startTime: SecondsToHours(values.startTime),
                            endTime: SecondsToHours(values.endTime),
                            totalTime,
                            notes: values.sleepNotes ? values.sleepNotes : '',
                        })
                    )
                }}
            >
                {({ values, handleChange, isSubmitting }) => (
                    <Form>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                alignItems: 'center',
                                columnGap: '1rem',
                            }}
                        >
                            <div>
                                <label
                                    htmlFor="start"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.25rem',
                                    }}
                                >
                                    Start
                                </label>
                                <Select
                                    id="startTime"
                                    name="startTime"
                                    onChange={handleChange}
                                    value={values.startTime}
                                >
                                    {selectTime}
                                </Select>
                            </div>
                            <div>
                                <label
                                    htmlFor="finish"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.25rem',
                                    }}
                                >
                                    Finish
                                </label>
                                <Select
                                    id="endTime"
                                    name="endTime"
                                    onChange={handleChange}
                                    value={values.endTime}
                                    onBlur={() =>
                                        handleTimeChange(
                                            values.startTime,
                                            values.endTime
                                        )
                                    }
                                >
                                    {selectTime}
                                </Select>
                            </div>
                            <div />
                        </div>
                        {totalTime && <p>Total sleep: {totalTime}</p>}
                        <label htmlFor="sleepNotes">Notes</label>
                        <TextArea
                            id="sleepNotes"
                            name="sleepNotes"
                            value={values.sleepNotes}
                            onChange={handleChange}
                            values={values.sleepNotes}
                        />
                        <Button type="submit" disabled={isSubmitting}>
                            Complete Activity
                        </Button>
                    </Form>
                )}
            </Formik>
        </Card>
    )
}

const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-height: 100px;
    margin-bottom: 1rem;
`

const Button = styled.button`
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: 0px 2px 12px #ddd;
    background-color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.shadow};
    transition: all 0.2s ease-in;
    cursor: pointer;
    :hover {
        box-shadow: 0px 2px 20px 0px #ccc;
        transition: all 0.2s ease-in;
    }
`

const Select = styled.select`
    border: 1px solid #ddd;
    width: 100%;
    margin-bottom: 1rem;
    box-shadow: 0px 2px 12px #ddd;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    line-height: 1.25;
    vertical-align: middle;
    background-color: #fff;
    -webkit-appearance: none;
    padding: 9px;
    border-radius: 4px;
`

export default Sleep
