const validatePath = require('../_internal/validatePath/validatePath');
const has = require('../has/has');
const curry = require('../curry/curry');
const isString = require('../isString/isString');

function path(pathTo, object) {
  // if path is not an array or string throw TypeError
  validatePath('path', pathTo);

  if (!has(pathTo, object)) {
    return undefined;
  }

  if (isString(pathTo)) {
    return object[pathTo];
  }

  // assume that path is an array
  let acc = object[pathTo[0]];
  for (let i = 1, l = pathTo.length; i < l; i += 1) {
    acc = acc[pathTo[i]];
  }

  return acc;
}

module.exports = curry(path);
