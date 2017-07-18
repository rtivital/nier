const curry = require('../curry/curry');


/**
 * Creates a new array with the results of calling a provided function on every element in the calling array.
 *
 * @since v1.0.0
 *
 * @param {fn} callback function that will be called on each element
 * @param {Array} data
 * @return {Array}
 *
 * @example
 * N.map((val) => val * 2, [1, 2, 3]); // -> [2, 4, 6]
 * N.map((name) => `Hello, ${name}!`, ['nier', 'you']); // -> ['Hello, nier!', 'Hello, you!']
 */
function map(callback, data) {
  const result = [];

  for (let i = 0, l = data.length; i < l; i += 1) {
    result.push(callback(data[i]));
  }

  return result;
}

module.exports = curry(map);
