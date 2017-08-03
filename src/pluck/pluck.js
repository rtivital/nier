const isValidPath = require('../_internal/isValidPath/isValidPath');
const curry = require('../curry/curry');
const map = require('../map/map');
const path = require('../path/path');


/**
 * Creates new array by extracting the same named property from all objects (or arrays) in the provided array.
 * Note that if supplied path is not found in object, undefined will be added to the result array.
 * Equivalent to `N.map(N.path(path), array)`.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array|string|number} propPath path to property
 * @param {Array} list array to pluck
 * @return {Array}
 *
 * @see map, path
 *
 * @example
 * N.pluck('a', [{ a: 1 }, { a: 2 }, { a: 3 }]); // -> [1, 2, 3]
 * N.pluck('a', [{ a: 1 }, { nothingToGetHere: 2 }, { a: 3 }]); // -> [1, undefined, 3]
 *
 * N.pluck(['a', 'b'], [{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }]); // -> [1, 2, 3]
 * N.pluck(['a', 'b'], [{ a: { b: 1 } }, { a: { nothingToGetHere: 2 } }, { a: { b: 3 } }]); // -> [1, undefined, 3]
 *
 * N.pluck(0, [[1, 'a'], [2, 'b'], [3, 'c']]); // -> [1, 2, 3]
 * N.pluck(1, [[1, 1], [2], [3, 3]]); // -> [1, undefined, 3]
 * N.pluck(['a', 0], [{ a: [1, 'a'] }, { a: [2, 'b'] }, { a: [3, 'c'] }]); // -> [1, 2, 3]
 */
function pluck(propPath, list) {
  if (!isValidPath(propPath)) {
    throw new Error('N.pluck received invalid property path');
  }

  if (!Array.isArray(list)) {
    throw new Error('N.pluck received non array value');
  }

  return map(path(propPath), list);
}

module.exports = curry(pluck);
