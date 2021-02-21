import React from "react";
import Form, { FormFooter } from "@atlaskit/form";
import Button from "@atlaskit/button";
import DatePickerField from "../form/DatePickerField";
import TextAreaField from "../form/TextAreaField";
import AvatarPickerField from "../form/AvatarPickerField";
import TextFieldWithValidation from "../form/TextFieldWithValidation";
import {
  isValidEmail,
  containsOnlyNameCharacters,
  isValidPhoneNumber,
} from "../utils/validators";
import { safelyGetSessionStorage } from "../utils/sessionStorage";

const handleSubmit = (data: { [key: string]: string }) => {
  console.log("form data", data);
  const sessionStorage = safelyGetSessionStorage();

  if (!sessionStorage) {
    return;
  }

  Object.keys(data).forEach((key) => {
    sessionStorage.setItem(key, data[key]);
  });
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
              helpText="Only latin a-z letters and characters: . - ' are allowed"
            />
            <TextFieldWithValidation
              name="lastname"
              label="last name"
              autocomplete="family-name"
              minCharacters={2}
              maxCharacters={40}
              isFormatValid={containsOnlyNameCharacters}
              helpText="Only latin a-z letters and characters: . - ' are allowed"
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
            <DatePickerField name="dob" label="date of birth" />

            <TextAreaField name="about" label="about" />

            <AvatarPickerField />

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
