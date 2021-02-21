import { FIELDS } from "./fieldsSettings";
import { REQUIRED } from "./validationTypes";

export const containsOnlyNameCharacters = (value: string) =>
  /^[a-z.'-\s]+$/i.test(value);

// Regex based on https://emailregex.com/
// eslint-disable-next-line max-len
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isValidEmail = (value: string) =>
  new RegExp(emailPattern).test(value);

// Regex based on E.164 norm https://www.twilio.com/docs/glossary/what-e164
const phonePattern = /^\+[1-9]\d*$/;
const removeWhitespaces = (value: string) => value.replace(/\s/g, "");
export const isValidPhoneNumber = (value: string) =>
  new RegExp(phonePattern).test(removeWhitespaces(value));

const isRequired = (fieldName: string) => {
  const fieldSettingsKey = Object.keys(FIELDS).find(
    (key) => FIELDS[key].name === fieldName
  );

  if (!fieldSettingsKey) {
    return true;
  }

  return FIELDS[fieldSettingsKey].isRequired;
};

export const requiredValidator = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .filter((key) => (!data[key] || !data[key].trim()) && isRequired(key))
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: REQUIRED,
      }),
      {}
    );
};
