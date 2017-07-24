const curry = require('../../curry/curry');
const assignSignature = require('../assignSignature/assignSignature');

/**
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
  return assignSignature('reversedIterator', true, reversedIterator);
}

module.exports = createReversedIterator;
