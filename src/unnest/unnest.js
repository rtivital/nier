const curry = require('../curry/curry');

/**
 * Removes one level of nesting from the list
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array} list data to unnest
 * @return {Array} unnested list
 *
 * @see flatten
 *
 * @example
 * N.unnest([[1, 2], [3], [4]]); // -> [1, 2, 3, 4]
 * N.unnest([1, [2], [3], [[4]]]); // -> [1, 2, 3, [4]]
 * N.unnest([1, 2, 3, 4]); // -> [1, 2, 3, 4]
 */
function unnest(list) {
  if (!Array.isArray(list)) {
    throw new Error('N.unnest recieved data that is not an array');
  }

  const result = [];

  for (let i = 0, l = list.length; i < l; i += 1) {
    if (Array.isArray(list[i])) {
      result.push(...list[i]);
    } else {
      result.push(list[i]);
    }
  }

  return result;
}

module.exports = curry(unnest);
