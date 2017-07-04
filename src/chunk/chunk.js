const toInteger = require('../_internal/toInteger/toInteger');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const curry = require('../curry/curry');
const isArrayLike = require('../isArrayLike/isArrayLike');

function chunk(size, array) {
  if (!isArrayLike(array)) {
    throw new Error('N.chunk in not able to split values that are not array or array like');
  }

  const parsedSize = toInteger(size);
  const safeClone = cloneArrayLike(array);
  const result = [];

  for (let i = 0, l = safeClone.length; i < l; i += parsedSize) {
    result.push(safeClone.slice(i, i + size));
  }

  return result;
}

module.exports = curry(chunk);
