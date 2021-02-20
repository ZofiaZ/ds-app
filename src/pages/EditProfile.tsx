import React from "react";
import Form from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextFieldWithValidation from "../form/TextFieldWithValidation";
import { isValidEmail, containsOnlyNameCharacters } from "../utils/validators";

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
            />
            <TextFieldWithValidation
              name="lastname"
              label="last name"
              autocomplete="family-name"
              minCharacters={2}
              maxCharacters={40}
              isFormatValid={containsOnlyNameCharacters}
            />
            <TextFieldWithValidation
              name="email"
              label="email"
              autocomplete="email"
              maxCharacters={70}
              isFormatValid={isValidEmail}
            />
            <Button type="submit" appearance="primary" isDisabled={submitting}>
              Submit
            </Button>
          </form>
        )}
      </Form>
    </div>
  );
}

export default EditProfile;
