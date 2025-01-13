const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello");
  }, 1000);
});

p.then((val) => {
  return val + " Hey";
})
  .then((nVal) => {
    return nVal + " Hola!";
  })
  .then((val) => {
    console.log(val);
  })
  .catch((e) => {
    console.log(e);
  });
