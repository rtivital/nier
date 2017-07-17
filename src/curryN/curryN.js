const CurryN = require('../_internal/curryN/curryN');

/**
 * Returns curried equivalent of provided function, with the specified arity.
 *
 * @since v1.0.0
 *
 * @param {Function} fn function to curry
 * @return {Function} curried function
 *
 * @see curry
 *
 * @example
 * const sum = N.curryN(3, (...args) => args[0] + args[1] + args[2]);
 * sum(1, 2, 3); // 6
 * sum(1, 2)(3); // 6
 * sum(1)(2)(3); // 6
 * sum(1)()(2)()(3); // 6
 */
function curryN(length, fn) {
  return CurryN(length, [], fn);
}

module.exports = CurryN(2, [], curryN);
