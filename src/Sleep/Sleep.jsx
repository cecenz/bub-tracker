import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import distanceInWords from "date-fns/format";
import { formattedTimeNow, selectTime } from "../common";

import { RadioButtonGroup, RadioButton } from "../Fields";
import ActivityCard from "../ActivityCard";

const Nappy = () => {
  // const startTime =
  // const endTime
  return (
    <ActivityCard>
      <Formik
        initialValues={{}}
        onSubmit={values => {
          console.log("values", values);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                columnGap: "1rem"
              }}
            >
              <div>
                <label
                  htmlFor="start"
                  style={{ display: "block", marginBottom: "0.25rem" }}
                >
                  Start
                </label>
                <Select
                  id="startTime"
                  name="startTime"
                  onChange={handleChange}
                  values={values.startTime}
                >
                  {selectTime}
                </Select>
              </div>
              <div>
                <label
                  htmlFor="finish"
                  style={{ display: "block", marginBottom: "0.25rem" }}
                >
                  Finish
                </label>
                <Select
                  id="endTime"
                  name="endTime"
                  onChange={handleChange}
                  values={values.endTime}
                >
                  {selectTime}
                </Select>
              </div>
              <div />
            </div>
            <label
              htmlFor="total"
              style={{ display: "block", marginBottom: "0.25rem" }}
            >
              Total Sleep
            </label>
            <input id="total" />
            <TextArea
              id="sleepNotes"
              name="sleepNotes"
              value={values.sleepNotes}
              onChange={handleChange}
              values={values.sleepNotes}
            />

            {/* <Button>Save</Button> */}

            <Button type="submit" disabled={isSubmitting}>
              Complete Activity
            </Button>
          </Form>
        )}
      </Formik>
    </ActivityCard>
  );
};

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
`;

export default Nappy;
