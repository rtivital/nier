const _curryN = require('../_internal/curryN/curryN');
const _isInteger = require('../_internal/isInteger/isInteger');


/**
 * Returns curried equivalent of provided function, with the specified arity.
 *
 * @since v1.0.0
 * @category Function
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
  if (typeof fn !== 'function') {
    throw new Error('N.curryN received value that can not be curried');
  }

  if (!_isInteger(length)) {
    throw new Error('N.curryN received length value that is not an integer');
  }

  return _curryN(length, [], fn);
}

module.exports = _curryN(2, [], curryN);
