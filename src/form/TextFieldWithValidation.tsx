import React, { useState } from "react";
import { ErrorMessage, Field, HelperMessage } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import * as VALIDATION_TYPES from "../utils/validationTypes";

type PropTypes = {
  name: string;
  label: string;
  autocomplete: string;
  type?: string;
  minCharacters?: number;
  maxCharacters?: number;
  isFormatValid?: (value: string) => boolean;
  helpText?: string;
  customFormatError?: string;
  inputmode?:
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
};

const validate = (
  minCharacters?: number,
  maxCharacters?: number,
  isFormatValid?: (value: string) => boolean
) => (value?: string) => {
  if (!value || !value.trim()) {
    return;
  }

  if (isFormatValid && !isFormatValid(value)) {
    return VALIDATION_TYPES.FORMAT;
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
  autocomplete = "off",
  type = "text",
  isFormatValid,
  minCharacters,
  maxCharacters,
  helpText,
  customFormatError,
  inputmode = "text",
}: PropTypes) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleBlur = () => {
    setIsBlurred(true);
  };

  return (
    <Field
      name={name}
      defaultValue=""
      label={label}
      isRequired
      validate={validate(minCharacters, maxCharacters, isFormatValid)}
    >
      {({ fieldProps, error }) => {
        return (
          <>
            {helpText && <HelperMessage>{helpText}</HelperMessage>}
            <TextField
              {...fieldProps}
              autoComplete={autocomplete}
              onBlur={handleBlur}
              type={type}
              inputMode={inputmode}
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
            {isBlurred && error === VALIDATION_TYPES.FORMAT && (
              <ErrorMessage>
                {customFormatError
                  ? customFormatError
                  : `Please enter a valid ${label}`}
              </ErrorMessage>
            )}
          </>
        );
      }}
    </Field>
  );
};

export default TextFieldWithValidation;
