import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { RadioButtonGroup, RadioButton } from "./Fields";
import styled from "styled-components";
import format from "date-fns/format";

const ActivityAdder = () => {
  // const [activities, setActivities] = useState([]);
  return (
    <StyledActivityAdder>
      <p>Time: {format(new Date(), "h:ma")}</p>
      <Formik
        initialValues={{}}
        onSubmit={values => {
          console.log("values", values);
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
    </StyledActivityAdder>
  );
};

const StyledActivityAdder = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 12px #ddd;
  padding: 1rem;
  border-top: 6px solid ${props => props.theme.color};
  border-radius: 3px;
  margin: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  margin-bottom: 1rem;
`;

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
`;

export default ActivityAdder;
