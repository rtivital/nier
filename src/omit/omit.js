const curry = require('../curry/curry');
const reduce = require('../reduce/reduce');
const keys = require('../keys/keys');
const includes = require('../includes/includes');

/**
 * Takes a list of keys and an object. Returns shallow copy of object that will not contain specified keys.
 * If key is missing in object it will be ignored.
 *
 * @since v1.0.0
 *
 * @param {Array} keys list of keys that should not be included in new object
 * @param {Object} object
 * @return {Object}
 *
 * @see pick
 *
 * @example
 * N.omit(['a', 'b'], { a: 1, b: 2, c: 3 }); // -> { c: 3 }
 * N.omit(['a', 'b', 'd'], { a: 1, b: 2, c: 3 }); // -> { c: 3 }
 * N.omit([], { a: 1, b: 2, c: 3 }); // -> { a: 1, b: 2, c: 3 }
 */
function omit(remove, object) {
  return reduce((acc, key) => {
    if (!includes(key, remove)) {
      acc[key] = object[key];
    }

    return acc;
  }, {}, keys(object));
}

module.exports = curry(omit);
