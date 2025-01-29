export const isLoggedIn = () => {
  let token = localStorage.getItem("token");

  if (token) return true;

  token = sessionStorage.getItem("token");

  if (token) return true;

  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};
