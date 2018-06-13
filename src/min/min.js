const curry = require('../curry/curry');

/**
 * Returns the min of its two arguments.
 *
 * @since v1.0.0
 * @category Number
 *
 * @param {*} a
 * @param {*} b
 * @return {*}
 *
 * @see max
 *
 * @example
 * N.min(1, 2); // -> 1
 * N.min('a', 'b'); // -> 'a'
 */
function min(a, b) {
  return a > b ? b : a;
}

module.exports = curry(min);
