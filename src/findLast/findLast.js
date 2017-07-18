const curry = require('../curry/curry');


/**
 * Returns last element that matches the predicate. If list does not contain such element returns undefined.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Function} callback predicate
 * @param {Array} list
 * @return {*} last element that mached predicate
 *
 * @see find, findIndex, findLastIndex
 *
 * @example
 * N.findLast((val) => val > 2, [1, 2, 3, 4]); // -> 4
 * N.findLast((val) => val > 2, [0, 1, 2]); // -> undefined
 * N.findLast(N.has('id'), [{ name: 1 }, { name: 2, id: 1 }, { name: 3, id: 2 }]); // -> { name: 3, id: 2 }
 */
function findLast(callback, data) {
  for (let i = data.length - 1; i > -1; i -= 1) {
    const currentItem = data[i];

    if (callback(currentItem)) {
      return currentItem;
    }
  }

  return undefined;
}

module.exports = curry(findLast);
