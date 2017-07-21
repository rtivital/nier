const curry = require('../curry/curry');


/**
 * Creates new array with provided length and fills it with provided value.
 * Note that if you provide object as an element that should fill the array,
 * it won't be cloned and each item in the array will only have a reference to
 * the initial object.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {number} length length of the array that should be filled
 * @param {*} element element that should be used as each item in the array
 * @return {Array}
 *
 * @see fillWith
 *
 * @example
 * N.fill(3, 'hello'); // -> ['hello', 'hello', 'hello']
 * N.fill(2, { a: 1 }); // -> [{ a: 1 }, { a: 1 }]
 */
function fill(length, element) {
  if (typeof length !== 'number') {
    throw new Error(
      `N.fill is not able to use ${typeof length} as array length, number should be provided`
    );
  }

  const array = [];

  for (let i = 0; i < length; i += 1) {
    array.push(element);
  }

  return array;
}

module.exports = curry(fill);
