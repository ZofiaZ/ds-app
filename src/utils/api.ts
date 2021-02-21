import {
  getProfileDataFromSessionStorage,
  saveProfileDataInSessionStorage,
} from "../utils/sessionStorage";

// Temporarily use session storage instead of backend api calls

export const postProfileData = (data: { [key: string]: string }) => {
  saveProfileDataInSessionStorage(data);
};

export const getProfileData = () => {
  const data = getProfileDataFromSessionStorage();
  return Promise.resolve(data);
};
