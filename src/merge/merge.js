const curry = require('../curry/curry');
const keys = require('../keys/keys');
const uniq = require('../uniq/uniq');
const reduce = require('../reduce/reduce');
const has = require('../has/has');

/**
 * Creates new object with properties of the first object combined with properties of the second object.
 * If a key exists in both objects, value from the second object will be assigned.
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Object} a first object
 * @param {Object} b second object
 * @return {Object} result of merging a and b
 *
 * @alias assign
 *
 * @example
 * N.merge({ a: 1 }, { b: 2 }); // -> { a: 1, b: 2 }
 * N.merge({ a: 1, b: 3 }, { a: 2 }); // -> { a: 2, b: 3 }
 */
function merge(a, b) {
  const resultKeys = uniq([...keys(a), ...keys(b)]);

  return reduce(
    (acc, key) => {
      const value = has(key, b) ? b[key] : a[key];
      acc[key] = value;
      return acc;
    },
    {},
    resultKeys
  );
}

module.exports = curry(merge);
