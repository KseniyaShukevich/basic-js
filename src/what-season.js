const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date instanceof Date && !isNaN(date.valueOf())) {
    let month = date.getMonth();
    if (month <= 1 || month == 11) {
      return 'winter';
    } else if (month <= 4) {
      return 'spring';
    } else if (month <= 7) {
      return 'summer';
    } else {
      return 'fall';
    }
  }

  throw 'Error';
};
