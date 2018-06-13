const curry = require('../curry/curry');

/**
 * Convers all string characters to lower case.
 *
 * @since v1.0.0
 * @category String
 *
 * @param {string} str
 * @return {string}
 *
 * @see toUpperCase, upperFirst
 *
 * @example
 * N.toLowerCase('Hello!'); // -> 'hello!'
 * N.toLowerCase('HELLO!'); // -> 'hello!'
 * N.toLowerCase('hello!'); // -> 'hello!'
 */
function toLowerCase(str) {
  if (typeof str !== 'string') {
    throw new Error('N.toLowerCase received a non string argument');
  }

  return str.toLowerCase();
}

module.exports = curry(toLowerCase);
