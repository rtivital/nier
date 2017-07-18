const curry = require('../curry/curry');
const has = require('../has/has');
const set = require('../set/set');

function removeProp(path, object) {
  const newObject = Object.assign({}, object);
  delete newObject[path];
  return newObject;
}


/**
 * Creates shallow copy of object and deletes value at provided path if it exists.
 * Creates shallow copies for all nested object referenced in path if path exists.
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Array|string} path path to property that should be removed
 * @param {*} value
 * @param {Object} object
 * @return {Object} shallow copy of object without value in path
 *
 * @see unset, setWith
 *
 * @example
 * N.unset('prop', { a: 1, prop: 2 }); // -> { a: 1 }
 * N.unset('prop', { prop: 1 }); // -> {}
 * N.unset(['nested', 'prop'], 'value', { a: 1, nested: { prop: 'value' } }); // -> { a: 1, nested: {} }
 * N.unset('nested', 'value', { a: 1, nested: { prop: 'value' } }); // -> { a: 1 }
 */
function unset(path, object) {
  if (!has(path, object)) {
    return object;
  }

  if (typeof path === 'string') {
    return removeProp(path, object);
  }

  const lastPathIndex = path.length - 1;

  let finalObject = object;
  for (let i = 0; i < lastPathIndex; i += 1) {
    finalObject = finalObject[path[i]];
  }

  return set(
    path.slice(0, lastPathIndex),
    removeProp(path[lastPathIndex], finalObject),
    object
  );
}

module.exports = curry(unset);
