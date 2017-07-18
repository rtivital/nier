const curry = require('../curry/curry');


/**
 * Returns true if any element match the predicate, false otherwise.
 *
 * @since v1.0.0
 *
 * @param {Function} callback predicate, will be called with each item
 * @param {Array} list
 * @return {boolean}
 *
 * @see some, every
 * @alias any
 *
 * @example
 * N.some((number) => number > 2, [1, 2, 3]); // -> true
 * N.some((number) => number < 2, [2, 3, 4]); // -> false
 * N.some(N.path('nier'))([{ nier: 'hello' }, { hello: true }]); // -> true
 */
function some(callback, data) {
  for (let i = 0, length = data.length; i < length; i += 1) {
    if (callback(data[i])) {
      return true;
    }
  }

  return false;
}

module.exports = curry(some);
