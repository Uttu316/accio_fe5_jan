const getUserData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = {
        name: "Ash",
      };
      res(data);
    }, 3000);
  });
}; //3s res

const getTask = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = {
        task: "Eat",
      };
      rej(data);
    }, 2000);
  });
}; //2s reject

const getCountry = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = {
        country: "india",
      };
      res(data);
    }, 1000);
  });
}; //1s res

let p = Promise.allSettled([getUserData(), getTask(), getCountry()]);

p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

// all promise have to settle. then fn will receive an array with status and value of individual promise
