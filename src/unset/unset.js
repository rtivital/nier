const curry = require('../curry/curry');
const isString = require('../isString/isString');
const isArray = require('../isArray/isArray');
const has = require('../has/has');
const set = require('../set/set');

function removeProp(path, object) {
  const newObject = Object.assign({}, object);
  delete newObject[path];
  return newObject;
}

function unset(path, object) {
  const pathIsString = isString(path);
  const pathIsArray = isArray(path);

  if (!pathIsString && !pathIsArray) {
    throw new Error('unset received path that is not an array or string');
  }

  if (!has(path, object)) {
    return object;
  }

  if (pathIsString) {
    return removeProp(path, object);
  }

  let finalProp = object;
  for (let i = 0, l = path.length - 1; i < l; i += 1) {
    finalProp = finalProp[path[i]];
  }

  return set(path.slice(0, path.length - 1), removeProp(path[path.length - 1], finalProp), object);
}

module.exports = curry(unset, 2);
