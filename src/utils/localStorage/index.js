export const getToken = () => {
  return JSON.parse(localStorage.getItem("accessToken"));
};

export const setToken = (token) => {
  localStorage.setItem("accessToken", JSON.stringify(token));
};

export const removeToken = () => {
  localStorage.removeItem("accessToken");
};
