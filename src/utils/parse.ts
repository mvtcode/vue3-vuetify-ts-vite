export const toJson = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
};
