const curry = require('../curry/curry');
const every = require('../every/every');
const equals = require('../equals/equals');
const keys = require('../keys/keys');

/**
 * Takes a spec object and a test object, returs true if test object fully satisfies spec.
 * Each of spec object property can contain any data type and will be compared to spec with `N.equals`.
 *
 * @since v1.0.0
 *
 * @param {Object} spec
 * @param {Object} data
 * @return {boolean}
 *
 * @see where
 *
 * @example
 * const spec = N.where({ a: 1, b: 2 });
 * spec({ a: 1, b: 2 }); // -> true
 * spec({ a: 1, b: 3 }); // -> false
 * spec({ a: 1 }); // -> false
 */
function whereEq(spec, data) {
  const specKeys = keys(spec);
  return every(key => equals(spec[key], data[key]), specKeys);
}

module.exports = curry(whereEq);
