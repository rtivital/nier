const curry = require('../curry/curry');
const includes = require('../includes/includes');
const reject = require('../reject/reject');
const flip = require('../flip/flip');

/**
 * Returns new array without values specified in the first argument. N.equals is used to determine equality.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array} valuesToExclude array of values that will be excluded from the array
 * @param {Array} array array from which values will be excluded
 * @return {Array}
 *
 * @example
 * N.without([1, 2, 3], [1, 1, 2, 2, 2, 3, 4, 5, 6]); // -> [4, 5, 6]
 * N.without([{ a: 1 }, { b: 2 }], [{ a : 1 }, { b: 2 }, { c: 3 }, { d: 4 }]); // -> [{ c: 3 }, { d: 4 }]
 */
function without(valuesToExclude, array) {
  if (!Array.isArray(valuesToExclude)) {
    throw new Error('N.without received non array first argument');
  }

  if (!Array.isArray(array)) {
    throw new Error('N.without received non array second argument');
  }

  return reject(flip(includes)(valuesToExclude), array);
}

module.exports = curry(without);
