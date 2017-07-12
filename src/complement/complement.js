const isFunction = require('../isFunction/isFunction');
const curry = require('../curry/curry');

function complement(fn) {
  if (!isFunction(fn)) {
    throw new Error('complement received argument that is not function');
  }

  return (...args) => !fn(...args);
}

module.exports = curry(complement);
