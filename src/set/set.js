const _isValidPath = require('../_internal/isValidPath/isValidPath');
const curry = require('../curry/curry');
const has = require('../has/has');


/**
 * Creates shallow copy of object and cretes or overrides value at provided path.
 * Creates shallow copies for all nested object paths.
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Array|string} path path to property, where value should be set
 * @param {*} value
 * @param {Object} object
 * @return {Object} shallow copy of object with new value in path
 *
 * @see setWith, unset
 *
 * @example
 * N.set('prop', 'value', { a: 1 }); // -> { a: 1, prop: 'value' }
 * N.set('prop', 'value', { prop: 1 }); // -> { prop: 'value' }
 * N.set(['nested', 'prop'], 'value', { a: 1 }); // -> { a: 1, nested: { prop: 'value' } }
 * N.set(['nested', 'prop'], 'value', { nested: { prop: 1 } }); // -> { nested: { prop: 'value' } }
 */
function set(path, value, object) {
  if (!_isValidPath(path)) {
    return object;
  }

  if (typeof path === 'string') {
    return Object.assign({}, object, { [path]: value });
  }

  if (path.length === 0) {
    return value;
  }

  const pathToSet = path[0];
  let finalValue = value;

  if (path.length > 1) {
    const nextObject = has(pathToSet, object) ? object[pathToSet] : {};
    finalValue = set(path.slice(1), value, nextObject);
  }

  return set(pathToSet, finalValue, object);
}

module.exports = curry(set);
