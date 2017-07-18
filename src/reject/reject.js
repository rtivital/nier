const curry = require('../curry/curry');


/**
 * Removes item from list if it matches the predicate.
 *
 * @since v1.0.0
 *
 * @param {Function} callback predicate
 * @param {Array} list array to filter
 * @return {Array} filtered list
 *
 * @see filter
 *
 * @example
 * N.reject((item) => item > 2)([1, 2, 3, 4]); // -> [1, 2]
 * N.reject(
 *   N.whereEq({ id: null }),
 *   [{ id: null, name: 1 }, { id: 'nier', name: 2 }, { id: null, name: 3 }]
 * ); // -> [{ id: 'nier', name: 2 }]
 */
function reject(callback, data) {
  const result = [];

  for (let i = 0, length = data.length; i < length; i += 1) {
    if (!callback(data[i])) {
      result.push(data[i]);
    }
  }

  return result;
}

module.exports = curry(reject);
