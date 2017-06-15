const curry = require('../curry/curry');
const isNumber = require('../isNumber/isNumber');
const isArrayLike = require('../isArrayLike/isArrayLike');

function chunk(size, array) {
  if (!isNumber(size)) {
    throw new Error(`chunk is not able to split array with ${size}, provide a number value`);
  }

  if (!isArrayLike(array)) {
    throw new Error('chunk in not able to split values that are not array or array like');
  }

  const result = [];
  for (let i = 0, l = array.length; i < l; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

module.exports = curry(chunk, 2);
