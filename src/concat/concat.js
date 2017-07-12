const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const isString = require('../isString/isString');
const curry = require('../curry/curry');


/**
 * Concatenates two array or string values into one
 *
 * @since v1.0.0
 *
 * @param {Array|string} a fitst value to concat
 * @param {Array|string} b second value to concat
 * @return {Array|string} result of concatination
 *
 * @example
 * N.concat([1, 2, 3], [4, 5]); // -> [1, 2, 3, 4, 5]
 * N.concat('Hello, ', 'nier!'); // -> 'Hello, nier!' 
 */
function concat(a, b) {
  if (!isArrayLike(a) || !isArrayLike(b)) {
    throw new Error('N.concat received values that can not be concated');
  }

  const aClone = cloneArrayLike(a);
  const bClone = cloneArrayLike(b);
  const concated = aClone.concat(bClone);

  return isString(a) && isString(b) ? concated.join('') : concated;
}

module.exports = curry(concat);
