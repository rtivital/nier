const isString = require('../isString/isString');
const curry = require('../curry/curry');


/**
 * Convers all string characters to lower case.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 * N.toLowerCase('Hello!'); // -> 'hello!'
 * N.toLowerCase('HELLO!'); // -> 'hello!'
 * N.toLowerCase('hello!'); // -> 'hello!'
 */
function toLowerCase(str) {
  if (!isString(str)) {
    throw new Error('N.toLowerCase received argument that is not string');
  }

  return str.toLowerCase();
}

module.exports = curry(toLowerCase);
