import React from "react";
import { Field, ErrorMessage } from "@atlaskit/form";
import { DatePicker } from "@atlaskit/datetime-picker";
import { getStoredValue } from "../utils/sessionStorage";
import * as VALIDATION_TYPES from "../utils/validationTypes";

type PropTypes = {
  name: string;
  label: string;
};

const DatePickerField = ({ name, label }: PropTypes) => (
  <Field
    name={name}
    label={label}
    defaultValue={getStoredValue(name)}
    isRequired
  >
    {({ fieldProps, error }) => {
      console.log("error", error, fieldProps);
      return (
        <>
          <DatePicker {...fieldProps} locale="en-GB" />
          {error === VALIDATION_TYPES.REQUIRED && (
            <ErrorMessage>this field cannot be blank</ErrorMessage>
          )}
        </>
      );
    }}
  </Field>
);

export default DatePickerField;
