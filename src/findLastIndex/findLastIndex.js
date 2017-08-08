const _createReversedIterator = require('../_internal/createReversedIterator/createReversedIterator');


/**
 * Returns index of last element that matches the predicate. If list does not contain such element returns -1.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Function} callback predicate
 * @param {Array} list
 * @return {*} last element that mached predicate
 *
 * @see find, findLast, findLastIndex, withIndex
 *
 * @example
 * N.findLastIndex((val) => val > 2, [1, 2, 3, 4]); // -> 3
 * N.findLastIndex((val) => val > 2, [0, 1, 2]); // -> -1
 * N.findLastIndex(N.has('id'), [{ name: 1 }, { name: 2, id: 1 }, { name: 3, id: 2 }]); // -> 2
 */
function findLastIndex(callback, data) {
  for (let i = data.length - 1; i > -1; i -= 1) {
    const currentItem = data[i];

    if (callback(currentItem)) {
      return i;
    }
  }

  return -1;
}

module.exports = _createReversedIterator(findLastIndex);
