const validatePath = require('../_internal/validatePath/validatePath');
const has = require('../has/has');
const curry = require('../curry/curry');
const isString = require('../isString/isString');

function path(pathTo, object) {
  // if path is not an array or string throw TypeError
  validatePath('path', pathTo);

  let pathValue;

  if (has(pathTo, object)) {
    if (isString(pathTo)) {
      pathValue = object[pathTo];
    } else { // assume that path is an array
      let acc = object[pathTo[0]];
      for (let i = 1, l = pathTo.length; i < l; i += 1) {
        acc = acc[pathTo[i]];
      }

      pathValue = acc;
    }
  }

  return pathValue;
}

module.exports = curry(path, 2);
