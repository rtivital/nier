const isString = require('../isString/isString');
const curry = require('../curry/curry');

function toUpperCase(str) {
  if (!isString(str)) {
    throw new Error('N.toUpperCase received argument that is not string');
  }

  return str.toUpperCase();
}

module.exports = curry(toUpperCase);
