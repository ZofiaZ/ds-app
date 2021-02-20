import React from "react";

import Form from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextFieldWithValidation from "../form/TextFieldWithValidation";

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
              label="First name"
              autocomplete="given-name"
              minCharacters={2}
              maxCharacters={30}
            />
            <TextFieldWithValidation
              name="lastname"
              label="Last name"
              autocomplete="family-name"
              minCharacters={2}
              maxCharacters={40}
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
