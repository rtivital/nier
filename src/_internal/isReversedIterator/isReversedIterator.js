const _SIGNATURES = require('../signatures');


/**
 * Internal – this function is not available in public api.
 *
 * Returns true if provided value has reversedIterator signature.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {*} value
 * @return {boolean}
 *
 * @example
 * const findLastIterator = createReversedIterator(findLast); // -> findLast with hidden property
 * isReversedIterator(findLastIterator); // -> true
 * isReversedIterator(findLast); // -> false
 */
function isReversedIterator(value) {
  return value != null && !!value[_SIGNATURES.reversedIterator];
}

module.exports = isReversedIterator;
