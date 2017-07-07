const validateLength = require('../validateLength/validateLength');

module.exports = function isArrayLike(value) {
  return value != null && validateLength(value.length) && typeof value !== 'function';
};
