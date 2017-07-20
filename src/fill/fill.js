const curry = require('../curry/curry');


/**
 * Creates new array with provided length and fills it with provided value
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
  const array = [];

  for (let i = 0; i < length; i += 1) {
    array.push(element);
  }

  return array;
}

module.exports = curry(fill);
