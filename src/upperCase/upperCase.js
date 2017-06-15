const isString = require('../isString/isString');

module.exports = function upperCase(str) {
  if (!isString(str)) {
    throw new Error('upperCase received argument that is not string');
  }

  return str.toUpperCase();
};
