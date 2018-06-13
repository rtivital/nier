const curry = require('../curry/curry');
const reduce = require('../reduce/reduce');
const has = require('../has/has');

/**
 * Takes a list of keys and an object. Returns shallow copy of object that will contain only specified keys.
 * If key is missing in object it will be ignored.
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Array} keys list of keys that should be included in new object
 * @param {Object} object
 * @return {Object}
 *
 * @see omit
 *
 * @example
 * N.pick(['a', 'b'], { a: 1, b: 2, c: 3 }); // -> { a: 1, b: 2 }
 * N.pick(['a', 'b', 'd'], { a: 1, b: 2, c: 3 }); // -> { a: 1, b: 2 }
 * N.pick([], { a: 1, b: 2, c: 3 }); // -> {}
 */
function pick(keys, object) {
  return reduce(
    (acc, key) => {
      if (has(key, object)) {
        acc[key] = object[key];
      }

      return acc;
    },
    {},
    keys
  );
}

module.exports = curry(pick);
