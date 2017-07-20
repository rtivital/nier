const curry = require('../curry/curry');
const curryN = require('../curryN/curryN');

/**
 * Creates new list iterator function with adding index and array arguments to the existing one.
 *
 * @since v1.0.0
 * @category Function
 *
 * @param {Function} fn
 * @return {Function}
 *
 * @example
 * N.withIndex(map)((item, index) => item + index, [10, 20, 30]); // -> [10, 21, 32]
 * N.withIndex(map)((_, __, array) => array, [10, 20, 30]); // -> [[10, 20, 30], [10, 20, 30], [10, 20, 30]]
 */
function withIndex(fn) {
  return curryN(fn.length, (...args) => {
    let index = 0;
    const callback = args[0];
    const array = args[args.length - 1];

    const withIndexFn = (...withIndexFnArgs) => {
      const result = callback(...withIndexFnArgs, index, array);
      index += 1;
      return result;
    };

    const finalArgs = [withIndexFn, ...args.slice(1)];

    return fn(...finalArgs);
  });
}

module.exports = curry(withIndex);
