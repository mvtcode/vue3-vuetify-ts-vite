enum Keys {
  ACCESS_TOKEN = "access-token",
}
export const clearAll = () => localStorage.clear();

export const getAccessToken = () => localStorage.getItem(Keys.ACCESS_TOKEN);
export const setAccessToken = (token: string) =>
  localStorage.setItem(Keys.ACCESS_TOKEN, token);
