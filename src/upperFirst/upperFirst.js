const isString = require('../isString/isString');

module.exports = function upperFirst(str) {
  if (!isString(str)) {
    throw new Error('upperFirst received argument that is not string');
  }

  return str.charAt(0).toUpperCase() + str.substring(1);
};
