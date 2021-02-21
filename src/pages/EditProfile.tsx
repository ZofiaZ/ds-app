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
  requiredValidator,
} from "../utils/validators";
import { FIELDS } from "../utils/fieldsSettings";
import { postProfileData } from "../utils/api";

const { FIRST_NAME, LAST_NAME, PHONE, EMAIL, DOB, ABOUT, AVATAR } = FIELDS;

const handleSubmit = (data: { [key: string]: string }) => {
  console.log("form data", data);

  const requiredErrors = requiredValidator(data);

  if (Object.keys(requiredErrors).length > 0) {
    return Promise.resolve(requiredErrors);
  }

  postProfileData(data);
};

function EditProfile() {
  return (
    <div className="EditProfile">
      <h1>Edit Profile</h1>
      <Form onSubmit={handleSubmit}>
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <TextFieldWithValidation
              name={FIRST_NAME.name}
              label={FIRST_NAME.label}
              autocomplete="given-name"
              minCharacters={2}
              maxCharacters={30}
              isFormatValid={containsOnlyNameCharacters}
              helpText={FIRST_NAME.helpText}
            />
            <TextFieldWithValidation
              name={LAST_NAME.name}
              label={LAST_NAME.label}
              autocomplete="family-name"
              minCharacters={2}
              maxCharacters={40}
              isFormatValid={containsOnlyNameCharacters}
              helpText={LAST_NAME.helpText}
            />
            <TextFieldWithValidation
              name={EMAIL.name}
              label={EMAIL.label}
              autocomplete="email"
              maxCharacters={70}
              isFormatValid={isValidEmail}
              inputmode="email"
            />
            <TextFieldWithValidation
              name={PHONE.name}
              label={PHONE.label}
              autocomplete="tel"
              minCharacters={6}
              maxCharacters={16}
              isFormatValid={isValidPhoneNumber}
              type="tel"
              inputmode="tel"
              helpText={PHONE.helpText}
            />
            <DatePickerField name={DOB.name} label={DOB.label} />

            <TextAreaField name={ABOUT.name} label={ABOUT.label} />

            <AvatarPickerField name={AVATAR.name} label={AVATAR.label} />

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
