const reduce = require('../reduce/reduce');
const slice = require('../slice/slice');
const head = require('../head/head');

/**
 * Performs first-to-last function composition. The first function may have any arity, the remaining functions must be unary.
 *
 * @since v1.0.0
 *
 * @param {...Function} fns functions to compose
 * @return {Function} composed function
 *
 * @example
 * N.pipe(val => val + 1, val => val * 2)(1); // -> 1 + 1 -> 2 * 2 -> 4
 * N.pipe(N.trim, N.upperFirst)('hello!  '); // N.upperFirst('hello!  ') -> N.trim('Hello!  ') -> 'Hello!'
 */
module.exports = function pipe(...fns) {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one function argument');
  }

  const firstFunction = head(fns);
  const tailFunctions = slice(1, fns.length, fns);

  return (...args) => reduce(
    (acc, fn) => fn(acc),
    firstFunction(...args),
    tailFunctions
  );
};
