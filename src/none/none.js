const curry = require('../curry/curry');


/**
 * Returns true if no elements match the predicate, false otherwise.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Function} callback predicate, will be called with each item
 * @param {Array} list
 * @return {boolean}
 *
 * @see some, every, withIndex
 *
 * @example
 * N.none((number) => number > 2, [1, 2, 3]); // -> false
 * N.none((number) => number < 2, [2, 3, 4]); // -> true
 * N.none(N.path('nier'))([{ nier: 'hello' }, { hello: true }]); // -> false
 */
function none(callback, list) {
  for (let i = 0, l = list.length; i < l; i += 1) {
    if (callback(list[i])) {
      return false;
    }
  }

  return true;
}

module.exports = curry(none);
