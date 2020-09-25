const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;

  newArr = arr.flat(Infinity);
  for(let value of newArr) {
    if (value === '^^') {
      result++;
    }
  }

 return result;
};
