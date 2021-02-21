export const FIELDS: {
  [key: string]: {
    name: string;
    label: string;
    helpText?: string;
    isRequired: boolean;
  };
} = {
  FIRST_NAME: {
    name: "firstname",
    label: "first name",
    helpText: "Only latin a-z letters and characters: . - ' are allowed",
    isRequired: true,
  },
  LAST_NAME: {
    name: "lastname",
    label: "last name",
    helpText: "Only latin a-z letters and characters: . - ' are allowed",
    isRequired: true,
  },
  EMAIL: {
    name: "email",
    label: "email",
    isRequired: true,
  },
  PHONE: {
    name: "phoneNumber",
    label: "phone number",
    isRequired: true,
    helpText:
      "needs to start with country prefix, for example +44 for UK numbers",
  },
  ABOUT: {
    name: "about",
    label: "about",
    isRequired: true,
  },
  DOB: {
    name: "dob",
    label: "date of birth",
    isRequired: true,
  },
  AVATAR: {
    name: "avatar",
    label: "avatar",
    isRequired: false,
  },
};
