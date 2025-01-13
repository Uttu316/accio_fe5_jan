console.log("A");
const p = new Promise((res, rej) => {
  console.log("B");
  setTimeout(() => {
    console.log("C");
    resolve("D");
  }, 2000);
  console.log("E");
});

console.log("I");

p.then((data) => {
  console.log("F", data);
}).catch((err) => {
  console.log("G", err);
});

console.log("H");
