/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import { createActivity } from './store/actions'

import { timestamp, displayTime, formatToDatabaseDate } from '../common'

import { RadioButtonGroup, RadioButton } from '../Fields'
import Card from '../Card'

const Nappy = ({ history }) => {
    const dispatch = useDispatch()
    const addActivity = activity => {
        console.log('activity', activity)
        dispatch(createActivity(activity))
    }
    return (
        <Card>
            <Formik
                onSubmit={values =>
                    addActivity({
                        date: formatToDatabaseDate(new Date()),
                        type: 'nappy',
                        id: timestamp(new Date()),
                        activityInfo: {
                            time: displayTime(new Date()),
                            nappy: values.nappy,
                            notes: values.nappyNotes,
                        },
                    })
                }
            >
                {({ values, handleChange, isSubmitting }) => (
                    <Form>
                        <RadioButtonGroup
                            id="nappy"
                            label="Nappy"
                            value={values.radioGroup}
                        >
                            <Field
                                component={RadioButton}
                                name="nappy"
                                id="wet"
                                label="Wet"
                            />
                            <Field
                                component={RadioButton}
                                name="nappy"
                                id="soiled"
                                label="Soiled"
                            />
                            <Field
                                component={RadioButton}
                                name="nappy"
                                id="dry"
                                label="Dry"
                            />
                            <Field
                                component={RadioButton}
                                name="nappy"
                                id="mixed"
                                label="Mixed"
                            />
                        </RadioButtonGroup>

                        <label htmlFor="nappyNotes">Notes</label>
                        <TextArea
                            id="nappyNotes"
                            name="nappyNotes"
                            value={values.nappyNotes}
                            onChange={handleChange}
                            values={values.nappyNotes}
                        />

                        <Button type="submit" disabled={isSubmitting}>
                            Submit activity
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

export default Nappy
