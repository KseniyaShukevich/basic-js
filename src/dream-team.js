const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  let i = 0;
  let result = '';

  if (Array.isArray(members)) {
    for (let value of members) {
      if ( (typeof value) === 'string' ) {
        value = value.trim();
        arr[i] = value[0].toUpperCase();
        i++;
      }
    }

    arr.sort();

    for (let char of arr) {
      result += char;
    }

    return result;
  }

  return false;
};
