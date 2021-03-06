import { IProfileData } from "../types";
import {
  getProfileDataFromSessionStorage,
  saveProfileDataInSessionStorage,
} from "../utils/sessionStorage";

// Temporarily use session storage & timeouts instead of backend api calls

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const postProfileData = async (data: IProfileData) => {
  const userId = saveProfileDataInSessionStorage(data);
  await sleep(2000);
  return Promise.resolve(userId);
};

export const getProfileData = async () => {
  const data = getProfileDataFromSessionStorage();
  await sleep(2000);
  return Promise.resolve(data);
};
