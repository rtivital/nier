const curry = require('../curry/curry');


/**
 * Creates new array containing the contents of the given array or array like structure,
 * with the give value at the front, folowed by the content of the array.
 * Note that prepend will create only a shallow copy of provided data structure.
 *
 * @since v1.0.0
 *
 * @param {*} value element to add at the begining of array
 * @param {Array} data array to add element to
 * @return {Array} new array with the provided value in front
 *
 * @see prepend, concat
 *
 * @example
 * N.prepend('nier', ['hello']); // -> ['nier', 'hello']
 * N.prepend('who loves you?')(['nier']); // ['who loves you?', 'nier']
 * N.prepend(['nier'], ['hello']); // [['nier'], 'hello']
 */
function prepend(element, array) {
  return [element, ...array];
}

module.exports = curry(prepend);
