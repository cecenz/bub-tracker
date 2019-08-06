import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import styled, { ThemeProvider } from 'styled-components'
import { withRouter } from 'react-router'

import { createActivity } from '../store/actions'
import { formatToDatabaseDate, SecondsToHours } from '../common/common'
import { TextArea } from '../components/Fields'
import { activity } from '../common/themes'
import Card from '../components/Card'

const Note = ({ history }) => {
    const dispatch = useDispatch()
    const handleSubmit = values => {
        return (
            dispatch(
                createActivity({
                    date: formatToDatabaseDate(new Date()),
                    notes: values.notes ? values.notes : '',
                    type: 'activity',
                    time: SecondsToHours(values.time),
                })
            ),
            history.replace('/bub-tracker/')
        )
    }
    return (
        <ThemeProvider theme={activity}>
            <Card>
                <Formik onSubmit={handleSubmit}>
                    {({ values, handleChange, isSubmitting }) => (
                        <Form>
                            <TextArea
                                id="notes"
                                label="Note"
                                value={values.notes}
                                onChange={handleChange}
                                values={values.notes}
                            />

                            <Button type="submit" disabled={isSubmitting}>
                                Submit Note
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </ThemeProvider>
    )
}

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

export default withRouter(Note)

// <div>
//     <h3>Activities</h3>
//     <div>
//         <Link to="/appointment">Appointment</Link>
//         <Link to="/note">Bath</Link>
//         <Link to="/measurement">Measurement</Link>
//     </div>
// </div>
