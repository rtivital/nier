const validatePath = require('../_internal/validatePath/validatePath');
const curry = require('../curry/curry');
const has = require('../has/has');
const isString = require('../isString/isString');

function set(path, value, object) {
  // if path is not an array or string throw TypeError
  validatePath('set', path);

  if (isString(path)) {
    return Object.assign({}, object, { [path]: value });
  }

  // assume that path is an array
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

module.exports = curry(set, 3);
