const isFunction = require('../isFunction/isFunction');
const reverse = require('../reverse/reverse');

module.exports = function flip(fn) {
  if (!isFunction(fn)) {
    throw new Error('flip received argument that is not function');
  }
  return (...args) => fn(...reverse(args));
};
