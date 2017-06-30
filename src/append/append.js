const isArrayLike = require('../isArrayLike/isArrayLike');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const curry = require('../curry/curry');

const ERROR_MESSAGE = 'N.append received data that is not array or array like structure';

function append(value, data) {
  if (!isArrayLike(data)) {
    throw new Error(ERROR_MESSAGE);
  }

  const result = cloneArrayLike(data);
  result[data.length] = value;

  return result;
}

module.exports = curry(append);
