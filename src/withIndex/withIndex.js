const isReversedIterator = require('../_internal/isReversedIterator/isReversedIterator');
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
 * N.withIndex(findLast)((_, index) => index > 2, [1, 2, 3, 4, 5]); // -> 5
 */
function withIndex(fn) {
  const isReversed = isReversedIterator(fn);

  return curryN(fn.length, (...args) => {
    const callback = args[0];
    const array = args[args.length - 1];
    let index = isReversed ? array.length - 1 : 0;

    const withIndexFn = (...withIndexFnArgs) => {
      const result = callback(...withIndexFnArgs, index, array);

      if (isReversed) {
        index -= 1;
      } else {
        index += 1;
      }

      return result;
    };

    const finalArgs = [withIndexFn, ...args.slice(1)];

    return fn(...finalArgs);
  });
}

module.exports = curry(withIndex);
