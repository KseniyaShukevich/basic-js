const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && (position ^ 0) === position && position <= this.array.length - 1) {
      this.array.splice(position - 1, 1);
    return this;
    }

    this.array = [];
    throw 'Error';
  },
  reverseChain() {
    let reverseArray = [];

    for (let i = this.array.length - 1; i >= 0; i--) {
      reverseArray.push(this.array[i]);
    }
    this.array = reverseArray.slice();
    return this;
  },
  finishChain() {
    let result = [];

    for (let value of this.array) {
      result.push(`( ${value} )`);
    }

    this.array = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;
