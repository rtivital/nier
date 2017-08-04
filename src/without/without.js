const curry = require('../curry/curry');
const includes = require('../includes/includes');


/**
 * Returns new array without values specified in the first argument
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {Array} exclude
 * @param {Array} list
 * @return {Array}
 *
 * @example
 * N.without([1, 2, 3], [1, 2, 3, 4, 5, 6]); // -> [4, 5, 6]
 * N.without([{ a: 1 }, { b: 2 }], [{ a : 1 }, { b: 2 }, { c: 3 }, { d: 4 }]); // -> [{ c: 3 }, { d: 4 }]
 */
function without(exclude, list) {
  if (!Array.isArray(exclude)) {
    throw new Error('N.without expected first argument to be an array');
  }

  if (!Array.isArray(list)) {
    throw new Error('N.without expected second argument to be an array');
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
