const isString = require('../isString/isString');
const curry = require('../curry/curry');

function upperFirst(str) {
  if (!isString(str)) {
    throw new Error('N.upperFirst received argument that is not string');
  }

  return str.charAt(0).toUpperCase() + str.substring(1);
}

module.exports = curry(upperFirst);
