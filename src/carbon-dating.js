const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const LOG_OF_TWO =  Math.log(2);

module.exports = function dateSample(sampleActivity) {
  let years = 0;
  let type = typeof +sampleActivity;
  reg = /^[0-1.]+$/;

  if (type === 'Number' && reg.test(sampleActivity)) {
    let yearsBuff = (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / LOG_OF_TWO;
    years = Math.ceil(yearsBuff);

  return years;
  }

  return false;
};
