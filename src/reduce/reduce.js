const curry = require('../curry/curry');


/**
 * Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
 *
 * @since v1.0.0
 *
 * @param {Function} callback function that will be called with each item
 * @param {*} initialValue initial value that will be used as accumulator
 * @param {Array} data
 * @return {*}
 *
 * @see normalize
 *
 * @example
 * N.reduce((acc, item) => acc + item, 10, [1, 2, 3]); // -> 16
 */
function reduce(callback, initialValue, data) {
  let acc = initialValue;

  for (let i = 0, l = data.length; i < l; i += 1) {
    acc = callback(acc, data[i]);
  }

  return acc;
}

module.exports = curry(reduce);
