const validateArgumentType = require('../_internal/validateArgumentType/validateArgumentType');
const curry = require('../curry/curry');

/**
 * Returns amount of array elements that matched the predicate.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Function} predicate function that will be called with each item
 * @param {Array} array
 * @return {boolean}
 *
 * @see withIndex
 *
 * @example
 * N.countWith(number => number > 2, [1, 2, 3]); // -> 1
 * N.countWith(number => number === 2, [2, 1, 2, 3, 2]); // -> 3
 * N.countWith(N.equals({ a: 1 }), [{ a: 1 }, { a: 1 }, { a: 2 }]); // -> 2
 */
function countWith(predicate, array) {
  validateArgumentType('N.countWith', 1, 'Function', predicate);
  validateArgumentType('N.countWith', 2, 'Array', array);

  let count = 0;

  for (let i = 0, l = array.length; i < l; i += 1) {
    if (predicate(array[i])) {
      count += 1;
    }
  }

  return count;
}

module.exports = curry(countWith);
