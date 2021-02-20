import React, { useState } from "react";
import { ErrorMessage, Field } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import * as VALIDATION_TYPES from "../utils/validationTypes";

type PropTypes = {
  name: string;
  label: string;
  autocomplete: string;
  minCharacters?: number;
  maxCharacters?: number;
};

const validate = (minCharacters?: number, maxCharacters?: number) => (
  value?: string
) => {
  if (!value || !value.trim()) {
    return;
  }

  if (minCharacters && value.trim().length < minCharacters) {
    return VALIDATION_TYPES.TOO_SHORT;
  }

  if (maxCharacters && value.trim().length > maxCharacters) {
    return VALIDATION_TYPES.TOO_LONG;
  }

  return;
};

const TextFieldWithValidation = ({
  name,
  label,
  autocomplete,
  minCharacters,
  maxCharacters,
}: PropTypes) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleBlur = () => {
    setIsBlurred(true);
  };

  console.log(isBlurred);

  return (
    <Field
      name={name}
      defaultValue=""
      label={label}
      isRequired
      validate={validate(minCharacters, maxCharacters)}
    >
      {({ fieldProps, error }) => {
        return (
          <>
            <TextField
              {...fieldProps}
              autoComplete={autocomplete}
              onBlur={handleBlur}
            />
            {isBlurred && error === VALIDATION_TYPES.TOO_SHORT && (
              <ErrorMessage>
                {label} needs to have minimum {minCharacters} characters
              </ErrorMessage>
            )}
            {isBlurred && error === VALIDATION_TYPES.TOO_LONG && (
              <ErrorMessage>
                {label} needs to have maximum {maxCharacters} characters
              </ErrorMessage>
            )}
          </>
        );
      }}
    </Field>
  );
};

export default TextFieldWithValidation;
