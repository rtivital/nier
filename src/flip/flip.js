const arity = require('../_internal/arity/arity');
const isFunction = require('../isFunction/isFunction');
const reverse = require('../reverse/reverse');
const curry = require('../curry/curry');

function flip(fn) {
  if (!isFunction(fn)) {
    throw new Error('N.flip received argument that is not function');
  }

  return arity(fn.length, (...args) => fn(...reverse(args)));
}

module.exports = curry(flip);
