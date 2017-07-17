const curry = require('../curry/curry');

/**
 * Returns index of first element that matches the predicate. If list does not contain such element returns -1.
 *
 * @since v1.0.0
 *
 * @param {Function} callback predicate
 * @param {Array} list
 * @return {*} first element that mached predicate
 *
 * @see find, findLast, findLastIndex
 *
 * @example
 * N.findIndex((val) => val > 2, [1, 2, 3, 4]); // -> 2
 * N.findIndex((val) => val > 2, [0, 1, 2]); // -> -1
 * N.findIndex(N.has('id'), [{ name: 1 }, { name: 2, id: 1 }, { name: 3, id: 2 }]); // -> 1
 */
function findIndex(callback, data) {
  for (let i = 0, l = data.length; i < l; i += 1) {
    const currentItem = data[i];

    if (callback(currentItem)) {
      return i;
    }
  }

  return -1;
}

module.exports = curry(findIndex);
