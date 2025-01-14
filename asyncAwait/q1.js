async function getData() {
  // return 'Helllo' // return Promise.resolve("Helllo")
  throw "Bye"; // return Promise.reject("bye")
}

const ans = getData();

ans
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });
