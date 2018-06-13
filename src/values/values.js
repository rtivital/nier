const keys = require('../keys/keys');
const curry = require('../curry/curry');

/**
 * Returns an array of enumerable own properties of the provided object. Uses Object.values if possible.
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
 * N.values({}); // -> []
 * N.values({ a: 1, b: 2, c: 3 }); // -> [1, 2, 3]
 *
 * N.values(null); // throws an error
 * N.values(undefined); // throws an error
 */
function values(object) {
  if (object == null) {
    throw new Error('N.values received a non object argument');
  }

  if ('values' in Object) {
    return Object.values(object);
  }

  const objectKeys = keys(object);
  const result = [];

  for (let i = 0, l = objectKeys.length; i < l; i += 1) {
    result.push(object[objectKeys[i]]);
  }

  return result;
}

module.exports = curry(values);
