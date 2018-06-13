const curry = require('../curry/curry');
const update = require('../update/update');

/**
 * Creates new copy of the array with the element at index replaced with provided callback function called with item at index.
 * If array does not have value at provided index, it won't be set and the original array will be returned.
 * Note that updateWith will only create shallow copy of the array.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {number} index position to update
 * @param {Function} callback function result of calling which with value at index will replace value at index
 * @param {Array} array
 * @return {Array} shallow array copy with replaced value
 *
 * @see update
 *
 * @example
 * N.updateWith(0, i => i + 10, [1, 2, 3]); // -> [11, 2, 3]
 * N.updateWith(-1, i => i + 10, [1, 2, 3]); // -> [1, 2, 13]
 * N.updateWith(40, i => i + 10, [1, 2, 3]); // -> [1, 2, 3]
 */
function updateWith(index, callback, array) {
  if (typeof callback !== 'function') {
    throw new Error('N.updateWith received callback that is not a function');
  }

  if (!Array.isArray(array)) {
    throw new Error('N.updateWith received data structure that is not an array');
  }

  const { length } = array;
  const indexToUpdate = index < 0 ? length + index : index;

  return update(index, callback(array[indexToUpdate]), array);
}

module.exports = curry(updateWith);
