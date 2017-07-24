
/**
 * Returns new array created from array or array like data structure.
 *
 * @since v1.0.0
 *
 * @param {*} array value to clone
 * @return {Array}
 *
 * @example
 * cloneArrayLike([1, 2, 3]); // -> [1, 2, 3]
 * cloneArrayLike({ 0: 'a', 1: 'b', length: 2 }); // -> ['a', 'b']
 * cloneArrayLike('nier'); // -> ['n', 'i', 'e', 'r']
 */
function cloneArrayLike(array) {
  const result = [];

  for (let i = 0, l = array.length; i < l; i += 1) {
    result[i] = array[i];
  }

  return result;
}

module.exports = cloneArrayLike;
