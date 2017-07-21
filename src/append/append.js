const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const curry = require('../curry/curry');


/**
 * Creates new array containing the contents of the given array or array like structure,
 * folowed by the given value. Note that all array like data structures (e.g. strings, arguments)
 * will be automaticly transformed to array.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {*} value element to add at the end of array
 * @param {Array} data array to add element to
 * @return {Array} new array folowed by provided value
 *
 * @see prepend, concat
 *
 * @example
 * N.append('nier', ['hello']); // -> ['hello', 'nier']
 * N.append('nier')(['who loves you?']); // ['who loves you?', 'nier']
 * N.append(['nier'], ['hello']); // ['hello', ['nier']]
 */
function append(value, data) {
  if (!isArrayLike(data)) {
    throw new Error('N.append received data that is not array or array like data structure');
  }

  const result = cloneArrayLike(data);
  result[data.length] = value;

  return result;
}

module.exports = curry(append);
