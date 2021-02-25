import React, { FunctionComponent } from "react";
import { Field, ErrorMessage } from "@atlaskit/form";
import TextArea from "@atlaskit/textarea";
import * as VALIDATION_TYPES from "../../utils/validationTypes";

type PropTypes = {
  name: string;
  label: string;
  defaultValue?: string;
};

const maxCharacters = 100;

const validate = (value?: string) => {
  if (!value || !value.trim()) {
    return;
  }

  if (maxCharacters && value.trim().length > maxCharacters) {
    return VALIDATION_TYPES.TOO_LONG;
  }

  return;
};

const TextAreaField: FunctionComponent<PropTypes> = ({
  name,
  label,
  defaultValue = "",
}) => (
  <Field<string, HTMLTextAreaElement>
    name={name}
    label={label}
    defaultValue={defaultValue}
    isRequired
    validate={validate}
  >
    {({ fieldProps, error }) => (
      <>
        <TextArea {...fieldProps} />
        {error === VALIDATION_TYPES.TOO_LONG && (
          <ErrorMessage>
            {label} needs to have maximum {maxCharacters} characters
          </ErrorMessage>
        )}
        {error === VALIDATION_TYPES.REQUIRED && (
          <ErrorMessage>this field cannot be blank</ErrorMessage>
        )}
      </>
    )}
  </Field>
);

export default TextAreaField;
