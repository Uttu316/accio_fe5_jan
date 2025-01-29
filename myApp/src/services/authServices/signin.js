import api from "..";

const signin = async (data) => {
  const res = await api({
    endpoint: "/users/login",
    method: "POST",
    body: {
      password: data.password,
      username: data.username,
    },
  });

  if (!res || (res && !res.accessToken)) throw new Error("Not valid user");

  const { accessToken } = res;

  if (data.remember) {
    localStorage.setItem("token", accessToken);
  } else {
    sessionStorage.setItem("token", accessToken);
  }

  return res;
};

export default signin;
