const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const curry = require('../curry/curry');


/**
 * Returns first item of array like collection
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array} collection
 * @return {any} first item of collection
 *
 * @example
 * N.head([1, 2, 3]); // -> 1
 * N.head('nier'); // -> 'n'
 * N.head({ 0: 'first', 1: 'second', length: 2 }); // -> first
 */
function head(collection) {
  if (isArrayLike(collection)) {
    return collection[0];
  }

  return undefined;
}

module.exports = curry(head);
