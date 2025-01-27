import api from "..";

const fetchUser = async (userid) => {
  const res = await api({
    endpoint: `/randomusers/${userid}`,
  });

  if (!res) return null;
  return {
    userName: res.login.username,
    id: res.id,
    photo: res.picture.large,
  };
};

export default fetchUser;
