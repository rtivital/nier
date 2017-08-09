const curry = require('../curry/curry');
const includes = require('../includes/includes');
const uniq = require('../uniq/uniq');


/**
 * Combines two arrays into a new array that contains only elements that are included in both arrays.
 * The result array will not contain duplicates and will preserve items order of first array.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 *
 * @example
 * N.intersection([1, 2, 3], [2, 3, 4]); // -> [2, 3]
 * N.intersection([1, 2, 3], [3, 2, 1]); // -> [1, 2, 3]
 * N.intersection([1, 1, 2, 2], [1, 1, 2, 2, 3]); // -> [1, 2]
 * N.intersection([1, 2, 3], [4, 5, 6]); // -> []
 * N.intersection([{ a: 1 }, { a: 2 }, { a: 3 }], [{ a: 2 }, { a: 3 }, { a: 4 }]); // -> [{ a: 2 }, { a: 3 }]
 */
function intersection(a, b) {
  if (!Array.isArray(a)) {
    throw new Error('N.intersection received first argument that is not an array');
  }

  if (!Array.isArray(a)) {
    throw new Error('N.intersection received second argument that is not an array');
  }

  const result = [];

  for (let i = 0, l = a.length; i < l; i += 1) {
    if (includes(a[i], b)) {
      result.push(a[i]);
    }
  }

  return uniq(result);
}

module.exports = curry(intersection);
