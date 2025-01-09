const double = (x) => {
  return x + x;
};
const sub = (x, y) => {
  return x - y;
};

const loop = (abc, xyz) => {
  let ans = 0;
  for (let i = 0; i < 4; i++) {
    let d = abc(i);
    ans += xyz(d, i);
  }
  return ans;
};

let output = loop(double, sub);

console.log(output);
