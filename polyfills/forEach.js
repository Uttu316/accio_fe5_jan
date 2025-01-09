//1. add a forEach fn in prototype of Array
//2. create a loop in that function
//3. loop the given array
//4. call the callback function on every iteration
//5. pass required arguments in callback functions

Array.prototype.forEach = function (callback) {
  let array = this;

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

let arr = [1, 2, 3, 4];

arr.forEach((item, index, curr) => {
  console.log(item, index, curr);
});
