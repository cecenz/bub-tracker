/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import { createActivity } from '../store/actions'
import { displayTime, formatToDatabaseDate } from '../common/common'
import { RadioButtonGroup, RadioButton, TextArea } from '../components/Fields'
import Card from '../components/Card'

const Nappy = ({ history }) => {
    const dispatch = useDispatch()
    const handleSubmit = values => {
        console.log('values', values)
        return (
            dispatch(
                createActivity({
                    date: formatToDatabaseDate(new Date()),
                    nappy: values.nappy,
                    notes: values.nappyNotes ? values.nappyNotes : '',
                    type: 'nappy',
                    time: displayTime(new Date()),
                })
            ),
            history.push('/')
        )
    }
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Nappy Change</h3>
            <Card>
                <Formik onSubmit={handleSubmit}>
                    {({ values, handleChange, isSubmitting }) => (
                        <Form>
                            <RadioButtonGroup
                                id="nappy"
                                label="Outcome"
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
                            <TextArea
                                label="Notes"
                                id="nappyNotes"
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
        </div>
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

export default withRouter(Nappy)
