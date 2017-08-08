const _SIGNATURES = require('../signatures');

/**
 * Internal – this function is not available in public api.
 *
 * Creates private nier property on any object. Created property can not be changed or deleted.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {string} signature signature key listed in signature constants file
 * @param {*} value value to be set to signature property
 * @param {Object|Function} object
 * @return {Object|Function}
 *
 * @example
 * const findLastReversedIterator = assignSignature('reversedIterator', true, findLast);
 * isReversedIterator(findLastReversedIterator); // -> true
 * isReversedIterator(findLast); // -> findLast
 */
function assignSignature(signature, value, object) {
  Object.defineProperty(object, _SIGNATURES[signature], {
    value,
    configurable: false,
    enumerable: false,
    writable: false,
  });

  return object;
}

module.exports = assignSignature;
