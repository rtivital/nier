/**
 * Internal – this function is not available in public api.
 *
 * Returns true if provided value can be valid length of iterable data structure.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {*} length
 * @return {boolean}
 *
 * @example
 * isValidLength(10); // -> true
 * isValidLength(0); // -> true
 *
 * isValidLength(-1); // -> false
 * isValidLength(0.6); // -> false
 * isValidLength(Number.MAX_SAFE_INTEGER + 1); // -> false
 * isValidLength('1'); // -> false
 */
function isValidLength(length) {
  return typeof length === 'number' && length % 1 === 0 && length >= 0 && length <= Number.MAX_SAFE_INTEGER;
}

module.exports = isValidLength;
