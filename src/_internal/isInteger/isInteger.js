/**
 * Internal – this function is not available in public api.
 *
 * Returns true if provided value is an integer.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {*} value
 * @return {boolean}
 *
 * @example
 * isInteger(1); // -> true
 * isInteger(1.5); // -> false
 * isInteger('1.5'); // -> false
 */
function isInteger(value) {
  return typeof value === 'number' && value % 1 === 0;
}

module.exports = isInteger;
