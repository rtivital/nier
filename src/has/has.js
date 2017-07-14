const isValidPath = require('../_internal/isValidPath/isValidPath');
const curry = require('../curry/curry');
const isString = require('../isString/isString');

function has(path, object) {
  if (object == null || !isValidPath(path)) {
    return false;
  }

  if (isString(path)) {
    return Object.prototype.hasOwnProperty.call(object, path);
  }

  const pathToTest = path[0];

  if (path.length > 1) {
    return has(path.slice(1), object[pathToTest]);
  }

  return has(pathToTest, object);
}

module.exports = curry(has);
