const validateArgumentType = require('../_internal/validateArgumentType/validateArgumentType');
const curry = require('../curry/curry');
const concat = require('../concat/concat');

/**
 * Creates new array containing the contents of the given array folowed by the given value.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {*} value element to add at the end of array
 * @param {Array} array array to add element to
 * @return {Array} new array folowed by provided value
 *
 * @see prepend, concat
 *
 * @example
 * N.append('nier', ['hello']); // -> ['hello', 'nier']
 * N.append('nier')(['who loves you?']); // ['who loves you?', 'nier']
 * N.append(['nier'], ['hello']); // ['hello', ['nier']]
 */
function append(value, array) {
  validateArgumentType('N.append', 2, 'Array', array);
  return concat(array, [value]);
}

module.exports = curry(append);
