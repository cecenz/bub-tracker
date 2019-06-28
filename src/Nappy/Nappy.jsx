import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import styled from 'styled-components'

import { formattedTimeNow, formatToDatabaseDate, createId } from '../common'

import { RadioButtonGroup, RadioButton } from '../Fields'
import ActivityCard from '../ActivityCard'

const Nappy = () => {
    return (
        <ActivityCard>
            <p>Time: {formattedTimeNow}</p>
            <Formik
                onSubmit={values => {
                    const activityId = createId()
                    const result = {
                        theme: 'nappy',
                        nappy: values.nappy,
                        notes: values.nappyNotes,
                    }
                    axios
                        .patch(
                            `https://bub-tracker-758cd.firebaseio.com/activities/${formatToDatabaseDate()}/${activityId}.json`,
                            result
                        )
                        .then(res => {
                            console.log(res.data)
                        })
                }}
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
                                id="dry"
                                label="Dry"
                            />
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
        </ActivityCard>
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
