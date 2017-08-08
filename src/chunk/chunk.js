const _cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const _isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const _isInteger = require('../_internal/isInteger/isInteger');
const curry = require('../curry/curry');


/**
 * Creates an array of elements split into groups with provided length value.
 * If array can't be split evenly, the final chunk will contain the remaining elements.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {number} size size of each chunk
 * @param {Array} value value to process
 * @return {Array} array of chunks
 *
 * @alias splitAt
 *
 * @example
 * N.chunk([1, 2, 3, 4, 5], 2); // -> [[1, 2], [3, 4], [5]]
 * N.chunk([1, 2], 3); // -> [[1, 2]]
 * N.chunk([], 2); // -> []
 */
function chunk(size, value) {
  if (!_isArrayLike(value)) {
    throw new Error('N.chunk in not able to split values that are not array or array like');
  }

  if (!_isInteger(size)) {
    throw new Error('N.chunk is not able to use non integer values as chunk size');
  }

  const safeClone = _cloneArrayLike(value);
  const result = [];

  for (let i = 0, l = safeClone.length; i < l; i += size) {
    result.push(safeClone.slice(i, i + size));
  }

  return result;
}

module.exports = curry(chunk);
