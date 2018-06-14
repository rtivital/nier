const validateArgumentType = require('../_internal/validateArgumentType/validateArgumentType');
const curry = require('../curry/curry');

/**
 * Returns amount of array elements that matched the predicate.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Function} callback predicate, will be called with each item
 * @param {Array} list
 * @return {boolean}
 *
 * @see withIndex
 *
 * @example
 * N.amount((number) => number > 2, [1, 2, 3]); // -> 1
 * N.amount((number) => number === 2, [2, 1, 2, 3, 2]); // -> 3
 * N.amount(N.equals({ a: 1 }), [{ a: 1 }, { a: 1 }, { a: 2 }]); // -> 2
 */
function amount(callback, list) {
  validateArgumentType('N.amount', 1, 'Function', callback);
  validateArgumentType('N.amount', 2, 'Array', list);

  let count = 0;

  for (let i = 0, l = list.length; i < l; i += 1) {
    if (callback(list[i])) {
      count += 1;
    }
  }

  return count;
}

module.exports = curry(amount);
