const curry = require('../curry/curry');
const equals = require('../equals/equals');
const some = require('../some/some');


/**
 * Returns true if provided value is contained in array or string.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {*} value
 * @param {Array|string} list
 * @return {boolean}
 *
 * @see some, every
 * @alias contains
 *
 * @example
 * N.includes(1, [1, 2, 3]); // -> true
 * N.includes({ a: 1 }, [{ a: 1 }, { a: 2 }, { a: 3 }]); // -> true
 * N.includes('Hello', 'Hello, nier!'); // -> true
 * N.includes('i am not included', 'not here'); // -> false
 */
function includes(value, list) {
  if (typeof list === 'string') {
    return list.indexOf(value) >= 0;
  }

  if (!Array.isArray(list)) {
    throw new Error('N.includes received value that is not string or array type');
  }

  return some(equals(value), list);
}

module.exports = curry(includes);
