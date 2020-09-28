const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        if (i !== arr.length - 1) {
          newArr.push(null);
          i++;
        }
      } else
      if (arr[i] === '--discard-prev') {
        if (i !== 0) {
          newArr.pop();
          newArr.push(null);
        }
      } else
      if (arr[i] === '--double-next') {
        if (i !== arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
      } else
      if (arr[i] === '--double-prev') {
        if (i !== 0) {
          newArr.push(newArr[newArr.length - 1]);
        }
      } else {
        newArr.push(arr[i]);
      }
    }

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === null) {
        newArr.splice(i, 1);
        i--;
      }
    }

    return newArr;
  }

  throw 'Error';
};
