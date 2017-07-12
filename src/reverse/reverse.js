const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const isString = require('../isString/isString');
const curry = require('../curry/curry');

function reverse(collection) {
  if (!isArrayLike(collection)) {
    throw new Error('N.reverse is not able to work with data that is not array or array like value');
  }

  const result = [];

  for (let i = 0, l = collection.length; i < l; i += 1) {
    result[i] = collection[l - i - 1];
  }

  return isString(collection) ? result.join('') : result;
}

module.exports = curry(reverse);
