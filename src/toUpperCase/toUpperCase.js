const curry = require('../curry/curry');


/**
 * Convers all string characters to upper case.
 *
 * @since v1.0.0
 * @category String
 *
 * @param {string} str
 * @return {string}
 *
 * @see toLowerCase, upperFirst
 *
 * @example
 * N.toUpperCase('Hello!'); // -> 'Hello!'
 * N.toUpperCase('HELLO!'); // -> 'Hello!'
 * N.toUpperCase('hello!'); // -> 'Hello!'
 */
function toUpperCase(str) {
  if (typeof str !== 'string') {
    throw new Error('N.toUpperCase received argument that is not string');
  }

  return str.toUpperCase();
}

module.exports = curry(toUpperCase);
