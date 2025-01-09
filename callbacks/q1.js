let x = 2;

function abc(p, q) {
  let c = 3;

  let v = add(p, q + c);

  return v + c;
}

function add(a, b) {
  return a + b + x;
}

const ans = abc(x, 3);

console.log(ans);
