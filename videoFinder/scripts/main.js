async function api(config) {
  const { endpoint, method = "GET" } = config;
  const URL = "https://api.freeapi.app/api/v1/public/youtube" + endpoint;
  try {
    const res = await fetch(URL, {
      method,
    });
    if (res.status >= 200 && res.status < 300) {
      const output = await res.json();

      return output.data;
    }
    console.log(res);
    throw new Error("Something went wrong");
  } catch (e) {
    console.log(e, URL);
    throw new Error(e.message);
  }
}

async function getVideos() {
  try {
    const res = await api({
      endpoint: "/videos",
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

getVideos();
