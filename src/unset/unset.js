const validatePath = require('../_internal/validatePath/validatePath');
const curry = require('../curry/curry');
const isString = require('../isString/isString');
const has = require('../has/has');
const set = require('../set/set');

function removeProp(path, object) {
  const newObject = Object.assign({}, object);
  delete newObject[path];
  return newObject;
}

function unset(path, object) {
  validatePath('unset', path);

  if (!has(path, object)) {
    return object;
  }

  if (isString(path)) {
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

module.exports = curry(unset, 2);
