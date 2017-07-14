const isString = require('../isString/isString');
const curry = require('../curry/curry');

function lowerCase(str) {
  if (!isString(str)) {
    throw new Error('N.lowerCase received argument that is not string');
  }

  return str.toLowerCase();
}

module.exports = curry(lowerCase);
