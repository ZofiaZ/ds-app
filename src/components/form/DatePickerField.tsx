import React, { FunctionComponent } from "react";
import { Field, ErrorMessage } from "@atlaskit/form";
import { DatePicker } from "@atlaskit/datetime-picker";
import * as VALIDATION_TYPES from "../../utils/validationTypes";

type PropTypes = {
  name: string;
  label: string;
  defaultValue?: string;
};

const DatePickerField: FunctionComponent<PropTypes> = ({
  name,
  label,
  defaultValue = "",
}) => (
  <Field name={name} label={label} defaultValue={defaultValue} isRequired>
    {({ fieldProps, error }) => {
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
