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
 * @see partial
 *
 * @example
 * N.partialRight((a, b) => a / b, [3])(6); // -> 2
 * N.partial(greet, name) => `${greet} ${name}`, ['nier'])('hello'); // -> 'hello nier'
 */
function partialRight(fn, predefined) {
  if (typeof fn !== 'function') {
    throw new Error('N.partialRight did not receive function');
  }

  return (...args) => fn(...args, ...predefined);
}

module.exports = curry(partialRight);
