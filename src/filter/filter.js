const curry = require('../curry/curry');


/**
 * Removes item from list if it does not match the predicate.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Function} callback predicate
 * @param {Array} list array to filter
 * @return {Array} filtered list
 *
 * @see reject
 *
 * @example
 * N.filter((item) => item > 2)([1, 2, 3, 4]); // -> [3, 4]
 * N.filter(
 *   N.has('id'),
 *   [{ id: 1, name: 'Nier' }, { name: 'Hello' }, { name: null }]
 * ); // -> [{ id: 1, name: 'Nier' }]
 */
function filter(callback, list) {
  const result = [];

  for (let i = 0, l = list.length; i < l; i += 1) {
    if (callback(list[i])) {
      result.push(list[i]);
    }
  }

  return result;
}

module.exports = curry(filter);
