const curry = require('../curry/curry');


/**
 * Recursively removes nesting from array.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array} list
 * @return {Array}
 *
 * @see unnest
 *
 * @example
 * N.flatten([1, [2], 3]); // -> [1, 2, 3]
 * N.flatten([[[[[1], 2]]], [3], 4, [5, [6, 7]]]); // -> [1, 2, 3, 4, 5, 6, 7]
 * N.flatten([1, 2, 3]); // -> [1, 2, 3]
 */
function flatten(list) {
  const result = [];

  for (let i = 0, l = list.length; i < l; i += 1) {
    if (Array.isArray(list[i])) {
      result.push(...flatten(list[i]));
    } else {
      result.push(list[i]);
    }
  }

  return result;
}

module.exports = curry(flatten);
