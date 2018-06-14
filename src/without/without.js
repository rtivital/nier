const curry = require('../curry/curry');
const includes = require('../includes/includes');

/**
 * Returns new array without values specified in the first argument. N.equals is used to determine equality.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array} exclude array of values that will be excluded from the array
 * @param {Array} list array from which values will be excluded
 * @return {Array}
 *
 * @example
 * N.without([1, 2, 3], [1, 1, 2, 2, 2, 3, 4, 5, 6]); // -> [4, 5, 6]
 * N.without([{ a: 1 }, { b: 2 }], [{ a : 1 }, { b: 2 }, { c: 3 }, { d: 4 }]); // -> [{ c: 3 }, { d: 4 }]
 */
function without(exclude, list) {
  if (!Array.isArray(exclude)) {
    throw new Error('N.without received non array first argument');
  }

  if (!Array.isArray(list)) {
    throw new Error('N.without received non array second argument');
  }

  const result = [];

  for (let i = 0, l = list.length; i < l; i += 1) {
    if (!includes(list[i], exclude)) {
      result.push(list[i]);
    }
  }

  return result;
}

module.exports = curry(without);
