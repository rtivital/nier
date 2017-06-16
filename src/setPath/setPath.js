const curry = require('../curry/curry');
const set = require('../set/set');

function has(path, object) {
  return object != null && Object.prototype.hasOwnProperty.call(object, path);
}

function setPath(path, value, object) {
  if (path.length === 0) {
    return value;
  }

  const pathToSet = path[0];
  let finalValue = value;

  if (path.length > 1) {
    const nextObject = has(pathToSet, object) ? object[pathToSet] : {};
    finalValue = setPath(path.slice(1), value, nextObject);
  }

  return set(pathToSet, finalValue, object);
}

module.exports = curry(setPath, 3);
