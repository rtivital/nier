const isFunction = require('../isFunction/isFunction');

function validateLength(length) {
  return typeof length === 'number' && length > -1 && length % 1 === 0;
}

module.exports = function isArrayLike(value) {
  return value != null && validateLength(value.length) && !isFunction(value);
};
