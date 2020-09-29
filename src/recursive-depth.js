const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    for (let value of arr) {
      if (Array.isArray(value)) {
        const curDepth = 1 + this.calculateDepth(value);
        if (maxDepth < curDepth) {
          maxDepth = curDepth;
        }
      }
    }

    return maxDepth;
  }
};