type ErrorMessage = string;

export const validateUsername = (username: string): [boolean, ErrorMessage] => {
  const regex = /^[A-Za-z0-9_.@]*$/;
  if (!regex.test(username) || username.length > 50 || username.length < 3)
    return [false, ""];
  return [true, ""];
};

export const validatePassword = (pass: string): [boolean, ErrorMessage] => {
  const regex = /^(?!.*<[^>]+>).*/;
  if (!regex.test(pass) || pass.length > 20 || pass.length < 3)
    return [false, ""];
  return [true, ""];
};

export const isNumber = (s: string): boolean => {
  return /\d+/.test(s);
};

export const validateSortOrder = (order: string): [boolean, ErrorMessage] => {
  try {
    const sort = JSON.parse(order);
    const regex = /^[A-Za-z0-9_.]*$/; // USERNAME in customValidator
    const invalidField = Object.keys(sort).find((elem) => !regex.test(elem));
    if (invalidField) {
      return [false, `invalid sort field: ${invalidField}`];
    }

    const isValidDirections = Object.values(sort).every(
      (elem) => elem === 1 || elem === -1
    );
    if (!isValidDirections) {
      return [false, "sort direction must be 1 or -1"];
    }

    return [true, ""];
  } catch (err) {
    return [false, "sort order has invalid format"];
  }
};

export const isJSON = (s: string): boolean => {
  try {
    JSON.parse(s);
    return true;
  } catch (e) {
    return false;
  }
};
