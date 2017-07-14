const isString = require('../isString/isString');
const curry = require('../curry/curry');

function toLowerCase(str) {
  if (!isString(str)) {
    throw new Error('N.toLowerCase received argument that is not string');
  }

  return str.toLowerCase();
}

module.exports = curry(toLowerCase);
