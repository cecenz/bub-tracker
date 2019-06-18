import React, { Fragment } from "react";
import styled from "styled-components";

// Radio group
export const RadioButtonGroup = ({ label, children }) => {
  return (
    <Fieldset>
      <Legend>{label}</Legend>
      <StyledRadioButtonGroup>{children}</StyledRadioButtonGroup>
    </Fieldset>
  );
};

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
      <StyledRadioButtonLabel htmlFor={id}>{label}</StyledRadioButtonLabel>
    </Fragment>
  );
};

const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.2rem;
`;

const Legend = styled.legend`
  margin-bottom: 1rem;
`;

const StyledRadioButtonLabel = styled.label`
  border: 1px solid #ddd;
  box-shadow: 0px 2px 12px #ddd;
  border-radius: 4px;
  display: block;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
  :hover {
    box-shadow: 0px 2px 15px 0px #ccc;
    transition: all 0.2s ease-in;
  }
`;

const StyledRadioButtonInput = styled.input`
  display: none;
  &:checked + ${StyledRadioButtonLabel} {
    background-color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.shadow};
    box-shadow: 0px 2px 12px #ddd inset;
  }
`;

const StyledRadioButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
`;
