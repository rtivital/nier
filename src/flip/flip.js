// const arity = require('../_internal/arity/arity');
const reverse = require('../reverse/reverse');
const curry = require('../curry/curry');
const curryN = require('../curryN/curryN');


/**
 * Takes function and returs function that acts the same as received, but accepts arguments in reversed order.
 *
 * @since v1.0.0
 * @category Function
 *
 * @param {Function} fn
 * @return {Function}
 *
 * @example
 * N.flip((a, b) => `${a}${b}`)('f', 'g'); // -> 'gf'
 * N.flip((a, b, c) => `${a}${b}${c}`)('f', 'g', 'h'); // -> 'hgf'
 */
function flip(fn) {
  if (typeof fn !== 'function') {
    throw new Error('N.flip received argument that is not function');
  }

  return curryN(fn.length, (...args) => fn(...reverse(args)));
}

module.exports = curry(flip);
