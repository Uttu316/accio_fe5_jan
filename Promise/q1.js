const p = new Promise((resolve, reject) => {
  //sync
  setTimeout(() => {
    reject("Hello");
  }, 5000);
});

p.then((value) => {
  console.log("Done", value);
}).catch((e) => {
  console.log("Error", e);
});
