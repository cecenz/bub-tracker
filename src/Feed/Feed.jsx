import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import { createActivity } from '../store/actions'
import {
    displayTime,
    selectTime,
    formatToDatabaseDate,
    SecondsToHours,
} from '../common/common'
import { TextArea, RadioButtonGroup, RadioButton } from '../components/Fields'
import Card from '../components/Card'
import Header from '../components/Header'

const Feed = ({ history }) => {
    const dispatch = useDispatch()

    const handleSubmit = values => {
        return dispatch(
            createActivity({
                date: formatToDatabaseDate(new Date()),
                type: 'feed',
                time: displayTime(new Date()),
                startTime: SecondsToHours(values.startTime),
                endTime: SecondsToHours(values.endTime),
                hold: values.hold,
                side: values.side,
                notes: values.feedNotes ? values.feedNotes : '',
            }),
            history.replace('/bub-tracker/')
        )
    }

    return (
        <>
            <Header history={history} />
            <Card>
                <Formik initialValues={{}} onSubmit={handleSubmit}>
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
                                    >
                                        {selectTime}
                                    </Select>
                                </div>
                                <div />
                            </div>
                            <RadioButtonGroup
                                id="side"
                                label="Feed side"
                                value={values.radioGroup}
                            >
                                <Field
                                    component={RadioButton}
                                    name="side"
                                    id="left"
                                    label="Left"
                                />
                                <Field
                                    component={RadioButton}
                                    name="side"
                                    id="right"
                                    label="Right"
                                />
                            </RadioButtonGroup>
                            <RadioButtonGroup
                                id="hold"
                                label="Hold style"
                                value={values.radioGroup}
                            >
                                <Field
                                    component={RadioButton}
                                    name="hold"
                                    id="rugby"
                                    label="Rugby"
                                />
                                <Field
                                    component={RadioButton}
                                    name="hold"
                                    id="standard"
                                    label="Standard"
                                />
                            </RadioButtonGroup>
                            <TextArea
                                label="Notes"
                                id="feedNotes"
                                onChange={handleChange}
                                values={values.feedNotes}
                            />
                            <Button type="submit" disabled={isSubmitting}>
                                Complete Activity
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </>
    )
}

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

export default withRouter(Feed)
