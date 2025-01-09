if (!Array.prototype.forEach) {
  // check if fun already exits

  //add forEach in prototype of Array
  Array.prototype.forEach = function (callback, thisArg) {
    // check if callback function is not a function
    if (typeof callback !== "function") {
      //throw a cutom error
      throw new TypeError(callback + " is not a function");
    }

    const array = this; // access the curr array
    for (let i = 0; i < array.length; i++) {
      //loop the arry

      if (array.hasOwnProperty(i)) {
        // loop only indexes

        callback.call(thisArg, array[i], i, array); // passed arrguments in callback
      }
    }
  };
}
