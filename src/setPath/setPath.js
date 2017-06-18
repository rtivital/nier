const curry = require('../curry/curry');
const has = require('../has/has');
const isArray = require('../isArray/isArray');
const isString = require('../isString/isString');

function set(path, value, object) {
  const pathIsString = isString(path);
  const pathIsArray = isArray(path);

  if (!pathIsString && !pathIsArray) {
    throw new Error('set received path that is not an array or string');
  }

  if (pathIsString) {
    return Object.assign({}, object, { [path]: value });
  }

  if (path.length === 0) {
    return value;
  }

  const pathToSet = pathIsArray ? path[0] : path;
  let finalValue = value;

  if (pathIsArray && path.length > 1) {
    const nextObject = has(pathToSet, object) ? object[pathToSet] : {};
    finalValue = set(path.slice(1), value, nextObject);
  }

  return set(pathToSet, finalValue, object);
}

module.exports = curry(set, 3);
