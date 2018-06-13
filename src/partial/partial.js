const curry = require('../curry/curry');

/**
 * Binds function to specified argument list.
 *
 * @since v1.0.0
 * @category Function
 *
 * @param {Function} fn function that should be binded
 * @param {Array} predefined list of arguments that function should be binded to
 * @return {Function} new function, binded to arguments
 *
 * @see partialRight
 *
 * @example
 * N.partial((a, b) => a + b, [1])(2); // -> 3
 * N.partial(greet, name) => `${greet} ${name}`, ['hello'])('nier'); // -> 'hello nier'
 */
function partial(fn, predefined) {
  if (typeof fn !== 'function') {
    throw new Error('N.partial did not receive function');
  }

  return (...args) => fn(...predefined, ...args);
}

module.exports = curry(partial);
