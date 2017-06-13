/**
 * @TODO: rewrite explanation
 *
 * Performs left-to-right function composition. The leftmost function may have
 * any arity, the remaining functions will receive only one argument.
 *
 * @param {...Function} fns functions to pipe
 * @return {Function}
 *
 * @example
 * const mutiplyBy2 = value => value * 2;
 * const add1 = value => value + 1;
 * const divideBy3 = value => value / 3;
 * const calculations = pipe(
 *   mutiplyBy2,
 *   add1,
 *   divideBy3
 * );
 */
module.exports = function pipe(...fns) {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one function argument');
  }

  const firstFunction = fns[0];
  const tailFunctions = fns.slice(1);

  return (...args) => tailFunctions.reduce(
    (acc, fn) => fn(acc),
    firstFunction(...args)
  );
};
