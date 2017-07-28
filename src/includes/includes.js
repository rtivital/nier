const curry = require('../curry/curry');
const equals = require('../equals/equals');
const some = require('../some/some');


/**
 * Returns true if provided value is equal to at least one element of the array.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {*} value
 * @param {Array} list
 * @return {boolean}
 *
 * @see some, every
 * @alias contains
 *
 * @example
 * N.includes(1, [1, 2, 3]); // -> true
 * N.includes({ a: 1 }, [{ a: 1 }, { a: 2 }, { a: 3 }]); // -> true
 */
function includes(value, list) {
  if (typeof list === 'string') {
    return list.indexOf(value) >= 0;
  }

  if (!Array.isArray(list)) {
    return false;
  }

  return some(equals(value), list);
}

module.exports = curry(includes);
