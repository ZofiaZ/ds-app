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
