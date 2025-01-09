Array.prototype.evens = function () {
  let array = this;
  let n = array.length;

  let output = [];
  for (let i = 0; i < n; i++) {
    if (array[i] % 2 === 0) {
      output.push(array[i]);
    }
  }

  return output;
};

let arr = [1, 2, 3, 4, 5, 6];

let ans = arr.evens();

console.log(ans);
