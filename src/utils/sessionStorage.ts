export const safelyGetSessionStorage = () => {
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

export const saveInSessionStorage = (data: { [key: string]: string }) => {
  const sessionStorage = safelyGetSessionStorage();

  if (!sessionStorage) {
    return;
  }

  Object.keys(data).forEach((key) => {
    sessionStorage.setItem(key, data[key]);
  });
};
