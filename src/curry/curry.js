const curryN = require('../curryN/curryN');


/**
 * Returns curried equivalent of provided function.
 *
 * @since v1.0.0
 * @category Function
 *
 * @param {Function} fn function to curry
 * @return {Function} curried function
 *
 * @see curryN
 *
 * @example
 * const sum = N.curry((a, b, c) => a + b + c);
 * sum(1, 2, 3); // 6
 * sum(1, 2)(3); // 6
 * sum(1)(2)(3); // 6
 * sum(1)()(2)()(3); // 6
 */
function curry(fn) {
  return curryN(fn.length, fn);
}

module.exports = curryN(1, curry);
