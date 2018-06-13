const set = require('../set/set');
const curry = require('../curry/curry');
const has = require('../has/has');
const path = require('../path/path');

/**
 * Works exactly like set function but instead of accepting actual value,
 * setWith accept callback that will receive current value of the object at path,
 * the result of calling callback with value will be set to object path.
 * If object does not have value at provided path callback will receive undefined.
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Array|string} pathToSet path to property, where value should be set
 * @param {Function} callback
 * @param {Object} object
 * @return {Object} shallow copy of object with new value in path
 *
 * @see set, unset, evolve
 *
 * @example
 * N.setWith('a', (val) => val + 1, { a: 1 }); // -> { a: 2 }
 * N.setWith(['a', 'b'], (val) => val + 1, { a: { b: 1 } }); // -> { a: { b: 2 } }
 * N.setWith('a', (val) => val === undefined, { b: 1 }); // -> { a: true, b: 1 }
 */
function setWith(pathToSet, callback, object) {
  if (has(pathToSet, object)) {
    return set(pathToSet, callback(path(pathToSet, object)), object);
  }

  return set(pathToSet, callback(undefined), object);
}

module.exports = curry(setWith);
