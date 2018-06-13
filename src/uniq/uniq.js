const curry = require('../curry/curry');
const includes = require('../includes/includes');

/**
 * Creates new array that contains all the same items from the initial one,
 * but all duplicates are excluded.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * N.uniq([1, 1, 1, 2, 3]); // -> [1, 2, 3]
 * N.uniq([{ a: 1 }, { b: 2 }, { a: 1 }]); // -> [{ a: 1 }, { b: 2 }]
 * N.uniq([1, 2, 3]); // -> [1, 2, 3]
 */
function uniq(array) {
  const result = [];

  for (let i = 0, l = array.length; i < l; i += 1) {
    const item = array[i];

    if (!includes(item, result)) {
      result.push(item);
    }
  }

  return result;
}

module.exports = curry(uniq);
