const curry = require('../curry/curry');
const every = require('../every/every');
const keys = require('../keys/keys');


/**
 * Takes a spec object and a test object, returs true if test object fully satisfies spec.
 * Each of spec object property must be a function, otherwise where will return false.
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Object} spec
 * @param {Object} data
 * @return {boolean}
 *
 * @see whereEq
 *
 * @example
 * const spec = N.where({ a: (val) => val > 1, b: (val) => val > 2 });
 * spec({ a: 1, b: 2 }); // -> false
 * spec({ a: 2, b: 3 }); // -> true
 * spec({ a: 4 }); // -> false
 */
function where(spec, data) {
  const specKeys = keys(spec);
  return every((key) => {
    if (typeof spec[key] === 'function') {
      return spec[key](data[key]);
    }

    return false;
  }, specKeys);
}

module.exports = curry(where);
