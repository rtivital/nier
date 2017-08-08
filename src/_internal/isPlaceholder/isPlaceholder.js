const _SIGNATURES = require('../signatures');

/**
 * Internal – this function is not available in public api.
 *
 * Returns true if provided value has placeholder signature.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {*} value
 * @return {boolean}
 *
 * @example
 * isPlaceholder(N.__); // -> true
 * isPlaceholder({}); // -> false
 * isPlaceholder(null); // -> false
 */
function isPlaceholder(value) {
  return value != null && !!value[_SIGNATURES.placeholder];
}

module.exports = isPlaceholder;
