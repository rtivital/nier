const isFunction = require('../isFunction/isFunction');
const curry = require('../curry/curry');


/**
 * Creates new function that returns the negated value of provided function
 *
 * @since v1.0.0
 *
 * @param {Function} fn function to negate
 * @return {boolean} negated result of calling fn
 *
 * @example
 * N.negate(() => true)(); // -> false
 * N.negate(() => false)(); // -> true
 * const notString = N.complement(N.isString);
 * notString('nier'); // -> false
 * notString(1000); // -> true
 */
function complement(fn) {
  if (!isFunction(fn)) {
    throw new Error('complement received argument that is not function');
  }

  return (...args) => !fn(...args);
}

module.exports = curry(complement);
