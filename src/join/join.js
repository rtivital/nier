const curry = require('../curry/curry');


/**
 * Unites all items of the list in a string with separator between items
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {string} separator
 * @param {Array} list
 * @return {string}
 *
 * @example
 * N.join('|', [1, 2, 3]); // -> '1|2|3'
 * N.join(' ', ['hello','nier']); // -> 'hello nier'
 */
function join(separator, list) {
  if (!Array.isArray(list)) {
    throw new Error('N.join receive list that cannot be joined');
  }

  return list.join(separator);
}

module.exports = curry(join);
