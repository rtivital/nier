const reverse = require('../reverse/reverse');
const pipe = require('../pipe/pipe');


/**
 * Performs last-to-first function composition. The last function may have any arity, the remaining functions must be unary.
 *
 * @since v1.0.0
 * @category Function
 *
 * @param {...Function} fns functions to compose
 * @return {Function} composed function
 *
 * @example
 * N.compose(val => val + 1, val => val * 2)(1); // -> 1 * 2 -> 2 + 1 -> 3
 * N.compose(N.trim, N.upperFirst)('  hello!'); // N.trim('  hello!') -> N.upperFirst('hello!') -> 'Hello!'
 */
function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('N.compose requires at least one function argument');
  }

  return pipe(...reverse(fns));
}

module.exports = compose;
