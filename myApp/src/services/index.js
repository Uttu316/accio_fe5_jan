async function api(config) {
  const { endpoint, method = "GET", body } = config;
  const URL = "https://api.freeapi.app/api/v1" + endpoint;
  try {
    const res = await fetch(URL, {
      method,
      body: typeof body === "object" ? JSON.stringify(body) : body,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });
    if (res.status >= 200 && res.status < 300) {
      const output = await res.json();
      if (output.data) {
        return output.data;
      }
    }
    console.log(res);
    throw new Error("Something went wrong");
  } catch (e) {
    console.log(e, URL);
    throw new Error(e.message);
  }
}

export default api;
