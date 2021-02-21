import React from "react";
import Form, { ErrorMessage, Field, FormFooter } from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextFieldWithValidation from "../form/TextFieldWithValidation";
import {
  isValidEmail,
  containsOnlyNameCharacters,
  isValidPhoneNumber,
} from "../utils/validators";
import { DatePicker } from "@atlaskit/datetime-picker";
import TextArea from "@atlaskit/textarea";

const handleSubmit = (data: { firstname: string; lastname: string }) => {
  console.log("form data", data);
};

function EditProfile() {
  return (
    <div className="EditProfile">
      <h1>Edit Profile</h1>
      <Form onSubmit={handleSubmit}>
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <TextFieldWithValidation
              name="firstname"
              label="first name"
              autocomplete="given-name"
              minCharacters={2}
              maxCharacters={30}
              isFormatValid={containsOnlyNameCharacters}
              customFormatError="Only latin a-z letters and characters: . - ' are allowed"
            />
            <TextFieldWithValidation
              name="lastname"
              label="last name"
              autocomplete="family-name"
              minCharacters={2}
              maxCharacters={40}
              isFormatValid={containsOnlyNameCharacters}
              customFormatError="Only latin a-z letters and characters: . - ' are allowed"
            />
            <TextFieldWithValidation
              name="email"
              label="email"
              autocomplete="email"
              maxCharacters={70}
              isFormatValid={isValidEmail}
              inputmode="email"
            />
            <TextFieldWithValidation
              name="phonenumber"
              label="phone number"
              autocomplete="tel"
              minCharacters={6}
              maxCharacters={16}
              isFormatValid={isValidPhoneNumber}
              type="tel"
              inputmode="tel"
              helpText="needs to start with country prefix, for example +44 for UK numbers"
            />
            <Field name="DoB" label="date of birth" defaultValue="" isRequired>
              {({ fieldProps, error }) => (
                <>
                  <DatePicker {...fieldProps} locale="en-GB" />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </>
              )}
            </Field>
            <Field<string, HTMLTextAreaElement>
              name="about"
              label="about"
              defaultValue=""
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextArea {...fieldProps} />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </>
              )}
            </Field>

            <FormFooter>
              <Button
                type="submit"
                appearance="primary"
                isDisabled={submitting}
              >
                Submit
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
}

export default EditProfile;
