const isValidLength = require('../isValidLength/isValidLength');

module.exports = function isArrayLike(value) {
  return value != null && isValidLength(value.length) && typeof value !== 'function';
};
