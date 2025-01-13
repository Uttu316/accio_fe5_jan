const getUserData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = {
        name: "Ash",
      };
      res(data);
    }, 3000);
  });
};

const getTask = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = {
        task: "Eat",
      };
      rej(data);
    }, 2000);
  });
};

const getCountry = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = {
        country: "india",
      };
      res(data);
    }, 1000);
  });
};

let p = Promise.all([getUserData(), getTask(), getCountry()]);

p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

//if all promises are reolved then it fulfil, if any single fail it get reject
