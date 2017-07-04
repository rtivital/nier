const isArrayLike = require('../isArrayLike/isArrayLike');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const curry = require('../curry/curry');

/**
 * Creates new array containing the contents of the given array or array like structure,
 * folowed by the given value. Note that append will create only a shallow copy of provided
 * data structure.
 *
 * @param {*} value element to add at the end of array
 * @param {Array} data array to add element to
 * @return {Array} new array folowed by provided value
 */
function append(value, data) {
  if (!isArrayLike(data)) {
    throw new Error('N.append received data that is not array or array like structure');
  }

  const result = cloneArrayLike(data);
  result[data.length] = value;

  return result;
}

module.exports = curry(append);
