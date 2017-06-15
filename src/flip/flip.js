const isFunction = require('../isFunction/isFunction');

module.exports = function flip(fn) {
  if (!isFunction(fn)) {
    throw new Error('flip received argument that is not function');
  }
  return (...args) => fn(...args.reverse());
};
