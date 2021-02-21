import {
  getProfileDataFromSessionStorage,
  saveProfileDataInSessionStorage,
} from "../utils/sessionStorage";

// Temporarily use session storage & timeouts instead of backend api calls

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const postProfileData = async (data: { [key: string]: string }) => {
  await sleep(300);
  saveProfileDataInSessionStorage(data);
  Promise.resolve("temp-user-id");
};

export const getProfileData = async () => {
  const data = getProfileDataFromSessionStorage();
  await sleep(3000);
  return Promise.resolve(data);
};
