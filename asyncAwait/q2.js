const api = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Hello");
    }, 1000);
  });
};

async function getData() {
  try {
    const res = await api();
    return res + " Hey";
  } catch (e) {
    console.log("Err", e);
    throw new Error("Oops");
  }
}

const ans = getData();

ans
  .then((value) => {
    console.log("Done", value);
  })
  .catch((err) => {
    console.log("Error", err);
  });
