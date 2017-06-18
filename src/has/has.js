const curry = require('../curry/curry');
const isArray = require('../isArray/isArray');
const isString = require('../isString/isString');

function has(path, object) {
  const pathIsString = isString(path);
  const pathIsArray = isArray(path);

  if (!pathIsArray && !pathIsString) {
    throw new Error('has received argument that is not array or string');
  }

  if (object == null) {
    return false;
  }

  if (pathIsString) {
    return Object.prototype.hasOwnProperty.call(object, path);
  }

  const pathToTest = path[0];

  if (path.length > 1) {
    return has(path.slice(1), object[pathToTest]);
  }

  return has(pathToTest, object);
}

module.exports = curry(has, 2);
