const add = (x, y) => {
  let s = x + y;
  return s;
};

const square = (a, b, callback) => {
  return callback(a, b) * callback(a, b);
};

let ans = square(2, 3, add);

console.log(ans);
