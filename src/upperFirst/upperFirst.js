const curry = require('../curry/curry');

/**
 * Convers first character of a string to upper case.
 *
 * @since v1.0.0
 * @category String
 *
 * @param {string} str
 * @return {string}
 *
 * @see toUpperCase, toLowerCase
 *
 * @example
 * N.upperFirst('hello!'); // -> 'Hello!'
 * N.upperFirst('Hello!'); // -> 'Hello!'
 * N.upperFirst('hELLO!'); // -> 'HELLO!'
 */
function upperFirst(str) {
  if (typeof str !== 'string') {
    throw new Error('N.upperFirst received a non string argument');
  }

  return str.charAt(0).toUpperCase() + str.substring(1);
}

module.exports = curry(upperFirst);
