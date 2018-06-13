const curry = require('../curry/curry');

/**
 * Returns an array containing names of enumerable own properties of the provided object.
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Object} object
 * @return {Array}
 *
 * @see values
 *
 * @example
 * N.keys({}); // -> []
 * N.keys({ a: 1, b: 2, c: 3 }); // -> ['a', 'b', 'c']
 */
function keys(object) {
  if (object == null) {
    return [];
  }

  return Object.keys(object);
}

module.exports = curry(keys);
