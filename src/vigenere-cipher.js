const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }

  _encrypt(message, key) {
    if (message && key) {
      let result = '';

      message = message.toUpperCase();
      key = key.toUpperCase();

        let countKey = 0;

        for (let i = 0; i < message.length; i++) {
          let charCode = '';

          if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            charCode = ( message.charCodeAt(i) + key.charCodeAt(countKey % key.length) - 130 ) % 26 + 65;
            result += String.fromCharCode(charCode);
            countKey++;
          } else {
            result += message[i];
          }
        }

        return result;
    }

    throw 'Error';
  }

  encrypt(message, key) {
    if (this.flag) {
      return this._encrypt(message, key);
    } else {
      return this._encrypt(message, key).split('').reverse().join('');
    }
  }

  _decrypt(message, key) {
    if (message && key) {
      let result = '';

      message = message.toUpperCase();
      key = key.toUpperCase();

        let countKey = 0;

        for (let i = 0; i < message.length; i++) {
          let charCode = '';

          if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            charCode = ( message.charCodeAt(i) + 26 - key.charCodeAt(countKey % key.length) ) % 26 + 65;
            result += String.fromCharCode(charCode);
            countKey++;
          } else {
            result += message[i];
          }
        }

        return result;
    }

    throw 'Error';
  }

  decrypt (message, key) {
    if (this.flag) {
      return this._decrypt(message, key);
    } else {
      return this._decrypt(message, key).split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
