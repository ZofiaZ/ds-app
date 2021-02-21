import React from "react";
import { Field, ErrorMessage } from "@atlaskit/form";
import TextArea from "@atlaskit/textarea";
import { getStoredValue } from "../utils/sessionStorage";

type PropTypes = {
  name: string;
  label: string;
};

const TextAreaField = ({ name, label }: PropTypes) => (
  <Field<string, HTMLTextAreaElement>
    name={name}
    label={label}
    defaultValue={getStoredValue(name)}
    isRequired
  >
    {({ fieldProps, error }) => (
      <>
        <TextArea {...fieldProps} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    )}
  </Field>
);

export default TextAreaField;
