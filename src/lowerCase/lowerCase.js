const isString = require('../isString/isString');

module.exports = function lowerCase(str) {
  if (!isString(str)) {
    throw new Error('lowerCase received argument that is not string');
  }

  return str.toLowerCase();
};
