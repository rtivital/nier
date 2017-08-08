const curry = require('../../curry/curry');
const _assignSignature = require('../assignSignature/assignSignature');

/**
 * Internal – this function is not available in public api.
 *
 * Returns curried iterator with reversedIterator signature (used is withIndex function).
 *
 * @since v1.0.0
 *
 * @param {Function} iterator function that reversedIterator signature should be assigned to
 * @return {Function}
 *
 * @example
 * const findLastIterator = createReversedIterator(findLast); // -> findLast with hidden property
 * isReversedIterator(findLastIterator); // -> true
 * isReversedIterator(findLast); // -> false
 */
function createReversedIterator(iterator) {
  const reversedIterator = curry(iterator);
  return _assignSignature('reversedIterator', true, reversedIterator);
}

module.exports = createReversedIterator;
