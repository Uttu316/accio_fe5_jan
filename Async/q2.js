console.log("A");

setTimeout(function abc() {
  console.log("B");

  setTimeout(function mno() {
    console.log("G");
  }, 500);
});

setTimeout(function xyz() {
  console.log("C");
}, 2000);

console.log("E");

setTimeout(function pqr() {
  console.log("D");
}, 1000);

console.log("F");
