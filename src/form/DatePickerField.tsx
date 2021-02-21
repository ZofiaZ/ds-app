import React from "react";
import { Field, ErrorMessage } from "@atlaskit/form";
import { DatePicker } from "@atlaskit/datetime-picker";
import { getStoredValue } from "../utils/sessionStorage";

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
    {({ fieldProps, error }) => (
      <>
        <DatePicker {...fieldProps} locale="en-GB" />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    )}
  </Field>
);

export default DatePickerField;
