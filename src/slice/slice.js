const _isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const _cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const curry = require('../curry/curry');


/**
 * Returns shallow copy of collection part selected from the `begin` (inclusive) to `end` (exclusive).
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {number} begin start index
 * @param {number} end slice end
 * @param {Array|string} collection
 * @return {Array|string}
 *
 * @example
 * N.slice(0, 2, [0, 1, 2, 3, 4]); // -> [0, 1]
 * N.slice(0, -1, [0, 1, 2, 3, 4]); // -> [0, 1, 2, 3]
 * N.slice(2, -2, [0, 1, 2, 3, 4]); // -> [2]
 *  * N.slice(0, 2, 'nier'); // -> 'ni'
 */
function slice(from, to, collection) {
  if (!_isArrayLike(collection)) {
    throw new Error('N.slice received collection that is not array or array like');
  }

  const arrayCollection = _cloneArrayLike(collection);
  const slicedCollection = arrayCollection.slice(from, to);

  return typeof collection === 'string' ? slicedCollection.join('') : slicedCollection;
}

module.exports = curry(slice);
