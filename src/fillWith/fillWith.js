const curry = require('../curry/curry');


/**
 * Creates new array with provided length and fills it with the rusult of calling
 * provided callback function with item index.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {number} length length of the array that should be filled
 * @param {Function} callback function that will produce item which will be added to array
 * @return {Array}
 *
 * @see fill
 *
 * @example
 * N.fillWith(3, (index) => index); // -> [0, 1, 2]
 * N.fillWith(3, (index) => `hello-${index}`); // -> ['hello-0', 'hello-1', 'hello-2']
 * N.fillWith(2, (index) => ({ a: 'hello', b: index })); // -> [{ a: 'hello', b: 0 }, { a: 'hello', b: 1 }]
 */
function fillWith(length, callback) {
  if (typeof length !== 'number') {
    throw new Error(
      `N.fillWith is not able to use ${typeof length} as array length, number should be provided`
    );
  }

  if (typeof callback !== 'function') {
    throw new Error(`N.fillWith is not able to use ${typeof callback} as a callback, function should be provided`);
  }

  const array = [];

  for (let i = 0; i < length; i += 1) {
    array.push(callback(i));
  }

  return array;
}

module.exports = curry(fillWith);
