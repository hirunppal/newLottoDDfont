const ACESS_TOKEN = "accessToken";

export const getAccessToken = () => localStorage.getItem(ACESS_TOKEN);
export const setAccessToken = (token) =>
  localStorage.setItem(ACESS_TOKEN, token);
export const removeAccessTOken = () => localStorage.removeItem(ACESS_TOKEN);
