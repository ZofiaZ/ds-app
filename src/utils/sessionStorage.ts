import { FIELDS } from "../utils/fieldsSettings";

const safelyGetSessionStorage = () => {
  try {
    return sessionStorage;
  } catch {
    return null;
  }
};

export const getStoredValue = (key: string) => {
  const sessionStorage = safelyGetSessionStorage();

  if (!sessionStorage) {
    return "";
  }

  return sessionStorage.getItem(key) || "";
};

export const saveProfileDataInSessionStorage = (data: {
  [key: string]: string;
}) => {
  const sessionStorage = safelyGetSessionStorage();
  const tempUserId = "temp-user-id";

  sessionStorage?.setItem("userId", tempUserId);

  Object.keys(data).forEach((key) => {
    sessionStorage?.setItem(key, data[key]);
  });

  return tempUserId;
};

export const getProfileDataFromSessionStorage = () => {
  return Object.keys(FIELDS).reduce((acc, field) => {
    return {
      ...acc,
      [FIELDS[field].name]: getStoredValue(FIELDS[field].name),
    };
  }, {});
};
