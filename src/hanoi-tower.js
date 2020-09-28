const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  let turns = 1;
  let seconds = 0;

  for (let i = 0; i < disksNumber; i++) {
    turns *= 2;
  }

  turns -= 1;

  seconds = 60 * 60 / turnsSpeed * turns;
  obj.turns = turns;
  obj.seconds = Math.floor(seconds);

  return obj;
};
