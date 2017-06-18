const curry = require('../curry/curry');
const isString = require('../isString/isString');
const isArray = require('../isArray/isArray');
const has = require('../has/has');
const set = require('../set/set');

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
    const newObject = Object.assign({}, object);
    delete newObject[path];
    return newObject;
  }

  let finalProp = object;
  for (let i = 0, l = path.length - 1; i < l; i += 1) {
    finalProp = finalProp[path[i]];
  }

  const finalClone = Object.assign({}, finalProp);
  delete finalClone[path[path.length - 1]];


  return set(path.slice(0, path.length - 1), finalClone, object);
}

module.exports = curry(unset, 2);
