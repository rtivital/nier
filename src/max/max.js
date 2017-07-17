const curry = require('../curry/curry');


/**
 * Returns the max of its two arguments.
 *
 * @since v1.0.0
 *
 * @param {*} a
 * @param {*} b
 * @return {*}
 *
 * @see min
 *
 * @example
 * N.max(1, 2); // -> 2
 * N.max('a', 'b'); // -> 'b'
 */
function max(a, b) {
  return a > b ? a : b;
}

module.exports = curry(max);
