const isArray = require('../../isArray/isArray');
const isString = require('../../isString/isString');

module.exports = function validatePath(method, path) {
  const pathIsString = isString(path);
  const pathIsArray = isArray(path);

  if (!pathIsString && !pathIsArray) {
    throw new TypeError(`${method} received path that is not an array or string`);
  }
};
