const curry = require('../curry/curry');
const isArrayLike = require('../isArrayLike/isArrayLike');

function cloneArrayLike(array) {
  const result = [];

  for (let i = 0, l = array.length; i < l; i += 1) {
    result[i] = array[i];
  }

  return result;
}

function append(element, array) {
  if (!isArrayLike(array)) {
    throw new Error('append received value that is not array or array like');
  }

  const result = cloneArrayLike(array);
  result[array.length] = element;

  return result;
}

module.exports = curry(append);
