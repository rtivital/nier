const curry = require('../curry/curry');
const reduce = require('../reduce/reduce');
const has = require('../has/has');

/**
 * Turns array of objects into grouped object structure based on provided property.
 *
 * @since v1.0.0
 * @category Array
 *
 * @param {string} prop property that will be used to create object keys
 * @param {Array} list array of objects
 * @return {Object} groupByd object
 *
 * @see reduce
 *
 * @example
 * N.groupBy(
 *   'id',
 *   [{ id: 1, name: 'name-1' }, { id: 2, name: 'name-2' }, { id: 3, name: 'name-3' }]
 * );
 *
 * // Will result into:
 * // {
 * //   '1': { id: 1, name: 'name-1' },
 * //   '2': { id: 2, name: 'name-2' },
 * //   '3': { id: 2, name: 'name-3' },
 * // }
 */
function groupBy(prop, list) {
  return reduce(
    (acc, item) => {
      if (has(prop, item)) {
        acc[item[prop]] = item;
      }

      return acc;
    },
    {},
    list
  );
}

module.exports = curry(groupBy);
