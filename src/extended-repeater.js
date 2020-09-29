const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'} = options;
  let result = '';

  if (str === null) {
    str = 'null';
  }

  if (addition === null) {
    addition = 'null';
  }

  str = str.toString();
  separator = separator.toString();
  additionSeparator = additionSeparator.toString();

  if (addition !== undefined && additionRepeatTimes) {
    addition = addition.toString();

    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i < additionRepeatTimes - 1) {
        str += addition + additionSeparator;
      } else {
        str += addition;
      }
    }
  }

    for (let i = 0; i < repeatTimes; i++) {
      if (i < repeatTimes - 1) {
        result += str + separator;
      } else {
        result += str;
      }
    }

  return result;
};
