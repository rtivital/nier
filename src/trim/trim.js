const isString = require('../isString/isString');

module.exports = function trim(str) {
  if (!isString(str)) {
    throw new Error('trim received argument that is not string');
  }

  return str.trim();
};
