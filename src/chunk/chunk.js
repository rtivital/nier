const validateArgumentType = require('../_internal/validateArgumentType/validateArgumentType');
const validateArgumentWith = require('../_internal/validateArgumentWith/validateArgumentWith');
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
  validateArgumentType('N.chunk', 1, 'Number', size);
  validateArgumentWith('N.chunk', 1, arg => arg % 1 === 0 && arg > 0, size, 'be a non negative integer');
  validateArgumentType('N.chunk', 2, 'Array', value);

  const result = [];

  for (let i = 0, l = value.length; i < l; i += size) {
    result.push(value.slice(i, i + size));
  }

  return result;
}

module.exports = curry(chunk);
