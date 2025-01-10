console.log("A");

let arr = [1, 4, 3, 2, 5, 6, 0];

for (var i = 0; i < arr.length; i++) {
  let x = arr[i];

  setTimeout(() => {
    console.log(x);
  }, x * 1000);
}

console.log("B");
