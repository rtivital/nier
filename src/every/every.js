const curry = require('../curry/curry');


/**
 * Returns true if all elements match the predicate, false otherwise.
 *
 * @since v1.0.0
 *
 * @param {Function} callback predicate, will be called with each item
 * @param {Array} list
 * @return {boolean}
 *
 * @see some, none
 * @alias all
 *
 * @example
 * N.every((number) => number > 2, [1, 2, 3]); // -> false
 * N.every((number) => number > 2, [2, 3, 4]); // -> true
 * N.every(N.path('nier'))([{ nier: 'hello' }, { hello: true }]); // -> false
 */
function every(callback, list) {
  for (let i = 0, l = list.length; i < l; i += 1) {
    if (!callback(list[i])) {
      return false;
    }
  }

  return true;
}

module.exports = curry(every);
