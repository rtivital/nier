const isArrayLike = require('../isArrayLike/isArrayLike');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const curry = require('../curry/curry');

function append(element, array) {
  if (!isArrayLike(array)) {
    throw new Error('append received value that is not array or array like');
  }

  const result = cloneArrayLike(array);
  result[array.length] = element;

  return result;
}

module.exports = curry(append);
