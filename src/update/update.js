const curry = require('../curry/curry');
const has = require('../has/has');

/**
 * Creates new copy of the array with the element at index replaced with provided value.
 * If array does not have value at provided index, it won't be set and the original array will be returned.
 * Note that update will only create shallow copy of the array.
 *
 * @since v1.0.0
 *
 * @param {number} index position to update
 * @param {*} value value to set at position
 * @param {Array} array
 * @return {Array} shallow array copy
 *
 * @example
 * N.update(0, 'hello', ['hi', 'nier']); // -> ['hello', 'nier']
 * N.update(5, 'hello', ['hi', 'nier']); // -> ['hi', 'nier']
 * N.update(-1, 'nier', ['hi', 'there', 'you']); // -> ['hi', 'there', 'nier']
 */
function update(index, value, array) {
  const { length } = array;
  const indexToUpdate = index < 0 ? length + index : index;

  if (!has(indexToUpdate, array)) {
    return array;
  }

  const result = [];

  for (let i = 0; i < length; i += 1) {
    if (i === indexToUpdate) {
      result[i] = value;
    } else {
      result[i] = array[i];
    }
  }

  return result;
}

module.exports = curry(update);
