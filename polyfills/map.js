//1. add a myMap fn in prototype of Array
//2. create a loop in that function
//3. loop the given array
//4. call the callback function on every iteration
//5. pass required arguments in callback functions
//6  store the return value on every iteration in an output array
// 7. after the loop return the output array

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    let array = this;
    let output = [];
    for (let i = 0; i < array.length; i++) {
      let ans = callback(array[i], i, array);
      output.push(ans);
    }
    return output;
  };
}

let arr = [1, 2, 3, 4];
