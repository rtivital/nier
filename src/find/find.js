const curry = require('../curry/curry');


/**
 * Returns first element that matches the predicate. If list does not contain such element returns undefined.
 *
 * @since v1.0.0
 *
 * @param {Function} callback predicate
 * @param {Array} list
 * @return {*} first element that mached predicate
 *
 * @see findLast, findIndex, findLastIndex
 *
 * @example
 * N.find((val) => val > 2, [1, 2, 3, 4]); // -> 3
 * N.find(N.has('id'), [{ name: 1 }, { name: 2, id: 1 }, { name: 3, id: 2 }]); // -> { name: 2, id: 1 }
 */
function find(callback, list) {
  for (let i = 0, l = list.length; i < l; i += 1) {
    const currentItem = list[i];

    if (callback(currentItem)) {
      return currentItem;
    }
  }

  return undefined;
}

module.exports = curry(find);
