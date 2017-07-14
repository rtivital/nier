const isValidPath = require('../_internal/isValidPath/isValidPath');
const curry = require('../curry/curry');

function has(path, object) {
  if (object == null || !isValidPath(path)) {
    return false;
  }

  const pathType = typeof path;

  if (pathType === 'string' || pathType === 'number') {
    return Object.prototype.hasOwnProperty.call(object, path);
  }

  const pathToTest = path[0];

  if (path.length > 1) {
    return has(path.slice(1), object[pathToTest]);
  }

  return has(pathToTest, object);
}

module.exports = curry(has);
