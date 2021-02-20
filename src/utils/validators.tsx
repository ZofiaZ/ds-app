export const containsOnlyNameCharacters = (value?: string) =>
  !!value && /^[a-z.'-\s]+$/i.test(value);

// Regex created based on https://emailregex.com/
// eslint-disable-next-line max-len
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isValidEmail = (value?: string) =>
  !!value && new RegExp(emailPattern).test(value);
