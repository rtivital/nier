const keys = require('../keys/keys');
const curry = require('../curry/curry');

/**
 * Returns an array of enumerable own properties of the provided object.
 *
 * @since v1.0.0
 *
 * @param {Object} object
 * @return {Array}
 *
 * @see values
 *
 * @example
 * N.values({}); // -> []
 * N.values({ a: 1, b: 2, c: 3 }); // -> [1, 2, 3]
 */
function values(object) {
  const objectKeys = keys(object);
  const result = [];

  for (let i = 0, l = objectKeys.length; i < l; i += 1) {
    result.push(object[objectKeys[i]]);
  }

  return result;
}

module.exports = curry(values);
