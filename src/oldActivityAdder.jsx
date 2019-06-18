import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled, { css } from "styled-components";
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
// Radio group
const RadioButtonGroup = ({ value, error, touched, id, label, children }) => {
  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        {children}
      </fieldset>
    </div>
  );
};
// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
const ActivityAdder = () => {
  const [selectedOption, setselectedOption] = useState("Dry");
  const [activities, setActivities] = useState([]);

  const saveTodo = selectedOption => {
    setActivities([...activities, selectedOption]);
  };

  const handleOptionChange = option => {
    setselectedOption(option.target.value);
  };

  const handleDelete = activity => {
    activities.splice(activity.target.value, 1);
    setActivities([...activities]);
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", radioGroup: "" }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <RadioButtonGroup
              id="radioGroup"
              label="One of these please"
              value={values.radioGroup}
            >
              <Field
                component={RadioButton}
                name="radioGroup"
                id="radioOption1"
                label="Choose this option"
              />
              <Field
                component={RadioButton}
                name="radioGroup"
                id="radioOption2"
                label="Or choose this one"
              />
            </RadioButtonGroup>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <form
        onSubmit={event => {
          event.preventDefault();
          saveTodo(selectedOption);
        }}
      >
        <input
          type="radio"
          id="dry"
          name="outcome"
          value="Dry"
          checked={selectedOption === "Dry"}
          onChange={handleOptionChange}
        />
        <label htmlFor="dry">Dry</label>
        <input
          type="radio"
          id="wet"
          name="outcome"
          value="Wet"
          checked={selectedOption === "Wet"}
          onChange={handleOptionChange}
        />
        <label htmlFor="wet">Wet</label>

        <input
          type="radio"
          id="solid"
          name="outcome"
          value="Solid"
          checked={selectedOption === "Solid"}
          onChange={handleOptionChange}
        />
        <label htmlFor="solid">Solid</label>
        <Button type="submit" primary>
          Add diary note
        </Button>
      </form>
      <div>
        {activities.map((activity, index) => (
          <Fragment key={index}>
            <p>{activity}</p>
            <button onClick={handleDelete}>x</button>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ActivityAdder;
