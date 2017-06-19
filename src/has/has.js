const validatePath = require('../_internal/validatePath/validatePath');
const curry = require('../curry/curry');
const isString = require('../isString/isString');

function has(path, object) {
  // if path is not an array or string throw TypeError
  validatePath('has', path);

  if (object == null) {
    return false;
  }

  if (isString(path)) {
    return Object.prototype.hasOwnProperty.call(object, path);
  }

  // assume that path is an array
  const pathToTest = path[0];

  if (path.length > 1) {
    return has(path.slice(1), object[pathToTest]);
  }

  return has(pathToTest, object);
}

module.exports = curry(has, 2);
