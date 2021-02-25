import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Form, { FormFooter } from "@atlaskit/form";
import LoadingButton from "@atlaskit/button/loading-button";
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
import { IProfileData } from "../types";

interface IEditProfile extends RouteComponentProps {
  data?: IProfileData;
  setData: (data: { [key: string]: string }) => void;
}

const { FIRST_NAME, LAST_NAME, PHONE, EMAIL, DOB, ABOUT, AVATAR } = FIELDS;

const EditProfile = ({ history, data, setData }: IEditProfile) => {
  const handleSubmit = async (formData: { [key: string]: string }) => {
    const requiredErrors = requiredValidator(formData);

    console.log(requiredErrors);

    if (Object.keys(requiredErrors).length > 0) {
      return Promise.resolve(requiredErrors);
    }

    console.log(formData);
    const userId = await postProfileData(formData);
    setData({ ...formData, userId: userId });
    history.push("/", { displaySuccessBanner: true });
  };

  return (
    <div className="EditProfile">
      <h1>Edit Profile</h1>
      <Form onSubmit={handleSubmit}>
        {({ formProps, submitting }) => {
          return (
            <form {...formProps}>
              <TextFieldWithValidation
                name={FIRST_NAME.name}
                label={FIRST_NAME.label}
                autocomplete="given-name"
                minCharacters={2}
                maxCharacters={30}
                isFormatValid={containsOnlyNameCharacters}
                helpText={FIRST_NAME.helpText}
                defaultValue={data?.firstname}
              />
              <TextFieldWithValidation
                name={LAST_NAME.name}
                label={LAST_NAME.label}
                autocomplete="family-name"
                minCharacters={2}
                maxCharacters={40}
                isFormatValid={containsOnlyNameCharacters}
                helpText={LAST_NAME.helpText}
                defaultValue={data?.lastname}
              />
              <TextFieldWithValidation
                name={EMAIL.name}
                label={EMAIL.label}
                autocomplete="email"
                maxCharacters={70}
                isFormatValid={isValidEmail}
                inputmode="email"
                defaultValue={data?.email}
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
                defaultValue={data?.phoneNumber}
              />
              <DatePickerField
                name={DOB.name}
                label={DOB.label}
                defaultValue={data?.dob}
              />

              <TextAreaField
                name={ABOUT.name}
                label={ABOUT.label}
                defaultValue={data?.about}
              />

              <AvatarPickerField
                name={AVATAR.name}
                label={AVATAR.label}
                defaultValue={data?.avatar}
              />

              <FormFooter>
                <LoadingButton
                  type="submit"
                  appearance="primary"
                  isLoading={submitting}
                >
                  Save Profile
                </LoadingButton>
              </FormFooter>
            </form>
          );
        }}
      </Form>
    </div>
  );
};

export default withRouter(EditProfile);
