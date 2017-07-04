const toInteger = require('../_internal/toInteger/toInteger');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const curry = require('../curry/curry');
const isArrayLike = require('../isArrayLike/isArrayLike');


/**
 * Creates an array of elements split into groups with provided length value.
 * If array can't be split evenly, the final chunk will contain the remaining elements.
 *
 * @param {number} size size of each chunk
 * @param {Array} value value to process
 * @return {Array} array of chunks
 */
function chunk(size, value) {
  if (!isArrayLike(value)) {
    throw new Error('N.chunk in not able to split values that are not array or array like');
  }

  const parsedSize = toInteger(size);
  const safeClone = cloneArrayLike(value);
  const result = [];

  for (let i = 0, l = safeClone.length; i < l; i += parsedSize) {
    result.push(safeClone.slice(i, i + size));
  }

  return result;
}

module.exports = curry(chunk);
