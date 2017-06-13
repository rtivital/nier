const pipe = require('./pipe');

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity, the remaining functions will receive only one argument.
 *
 * @param {...Function} fns functions to pipe
 * @return {Function}
 */
module.exports = function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return pipe(...fns.reverse());
};
