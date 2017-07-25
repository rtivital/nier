const isValidLength = require('../isValidLength/isValidLength');


/**
 * Internal – this function is not available in public api.
 *
 * Returns true if value is valid array like data structure (e.g. string, arguments).
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {*} value
 * @return {boolean}
 *
 * @example
 * isArrayLike([]); // -> true
 * isArrayLike([1, 2, 3]); // -> true
 * isArrayLike('nier'); // -> true
 * (function() { return isArrayLike(arguments); })(1, 2, 3); // -> true
 * isArrayLike({ 0: 'hello', 1: 'nier', length: 2 }); // -> true
 *
 * isArrayLike({ 0: 'hello', 1: 'nier' }); // -> false
 * isArrayLike(f => f); // -> false
 * isArrayLike(null); // -> false
 */
function isArrayLike(value) {
  return value != null && isValidLength(value.length) && typeof value !== 'function';
}

module.exports = isArrayLike;
