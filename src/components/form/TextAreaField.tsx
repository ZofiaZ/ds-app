import React from "react";
import { Field, ErrorMessage } from "@atlaskit/form";
import TextArea from "@atlaskit/textarea";

type PropTypes = {
  name: string;
  label: string;
  defaultValue?: string;
};

const TextAreaField = ({ name, label, defaultValue = "" }: PropTypes) => (
  <Field<string, HTMLTextAreaElement>
    name={name}
    label={label}
    defaultValue={defaultValue}
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
