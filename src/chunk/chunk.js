const toInteger = require('../_internal/toInteger/toInteger');
const curry = require('../curry/curry');
const isArrayLike = require('../isArrayLike/isArrayLike');

function chunk(size, array) {
  const parsedSize = toInteger(size);

  if (!isArrayLike(array)) {
    throw new Error('N.chunk in not able to split values that are not array or array like');
  }

  const result = [];
  for (let i = 0, l = array.length; i < l; i += parsedSize) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

module.exports = curry(chunk);
