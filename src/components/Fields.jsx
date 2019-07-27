import React, { Fragment } from 'react'
import styled from 'styled-components'

// TextArea
export const TextArea = ({ id, value, values, label, onChange }) => {
    return (
        <>
            <label htmlFor={id} style={{ fontSize: '22px' }}>
                {label}
            </label>
            <StyledTextArea
                id={id}
                name={id}
                onChange={onChange}
                values={values}
            />
        </>
    )
}

// Radio group
export const RadioButtonGroup = ({ label, children }) => {
    return (
        <Fieldset>
            <Legend>{label}</Legend>
            <StyledRadioButtonGroup>{children}</StyledRadioButtonGroup>
        </Fieldset>
    )
}

// Radio input
export const RadioButton = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    className,
    ...props
}) => {
    return (
        <Fragment>
            <StyledRadioButtonInput
                name={name}
                id={id}
                type="radio"
                value={id}
                checked={id === value}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            />
            <StyledRadioButtonLabel htmlFor={id}>
                {label}
            </StyledRadioButtonLabel>
        </Fragment>
    )
}

const Fieldset = styled.fieldset`
    border: none;
    margin: 0;
    padding: 0;
    margin-bottom: 2.25rem;
`

const Legend = styled.legend`
    margin-bottom: 1rem;
    font-size: 22px;
`

const StyledRadioButtonLabel = styled.label`
    border: 1px solid #ddd;
    box-shadow: 0px 2px 12px #ddd;
    border-radius: 4px;
    display: block;
    text-align: center;
    padding: 0.75rem;
    cursor: pointer;
    transition: all 0.2s ease-in;
    :hover {
        box-shadow: 0px 2px 15px 0px #ccc;
        transition: all 0.2s ease-in;
    }
`

const StyledRadioButtonInput = styled.input`
    display: none;
    &:checked + ${StyledRadioButtonLabel} {
        background-color: ${props => props.theme.color};
        border: 1px solid ${props => props.theme.shadow};
        box-shadow: 0px 2px 12px #ddd inset;
    }
`

const StyledRadioButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledTextArea = styled.textarea`
    border: 1px solid #ddd;
    border-radius: 4px;
    min-height: 100px;
    margin-bottom: 2.25rem;
    margin-top: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 0.5rem;
    display: block;
    width: calc(100% - 1rem);
`
