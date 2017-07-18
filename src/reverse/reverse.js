const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const curry = require('../curry/curry');


/**
 * Returns new collection with reversed order.
 *
 * @since v1.0.0
 *
 * @param {Array|string} collection data to reverse
 * @return {Array|string}
 *
 * @example
 * N.reverse([1, 2, 3]); // -> [3, 2, 1]
 * N.reverse('nier'); // -> 'rein'
 */
function reverse(collection) {
  if (!isArrayLike(collection)) {
    throw new Error('N.reverse is not able to work with data that is not array or array like value');
  }

  const result = [];

  for (let i = 0, l = collection.length; i < l; i += 1) {
    result[i] = collection[l - i - 1];
  }

  return typeof collection === 'string' ? result.join('') : result;
}

module.exports = curry(reverse);
