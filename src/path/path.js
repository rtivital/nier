const has = require('../has/has');
const curry = require('../curry/curry');
const isString = require('../isString/isString');
const isArray = require('../isArray/isArray');

function path(pathTo, object) {
  const pathIsString = isString(pathTo);
  const pathIsArray = isArray(pathTo);
  let pathValue;

  if (has(pathTo, object)) {
    if (pathIsString) {
      pathValue = object[pathTo];
    }

    if (pathIsArray) {
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
