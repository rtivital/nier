const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const curry = require('../curry/curry');
const concat = require('../concat/concat');


/**
 * Creates new array containing the contents of the given array or array like structure,
 * with the give value at the front, folowed by the content of the array.
 * Note that all array like data structures (e.g. strings, arguments) will be automaticly transformed to array.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {*} value element to add at the begining of array
 * @param {Array} data array to add element to
 * @return {Array} new array with the provided value in front
 *
 * @see append, concat
 *
 * @example
 * N.prepend('nier', ['hello']); // -> ['nier', 'hello']
 * N.prepend('who loves you?')(['nier']); // ['who loves you?', 'nier']
 * N.prepend(['nier'], ['hello']); // [['nier'], 'hello']
 */
function prepend(value, data) {
  if (!isArrayLike(data)) {
    throw new Error('N.prepend received data that is not array or array like data structure');
  }

  return concat([value], data);
}

module.exports = curry(prepend);
