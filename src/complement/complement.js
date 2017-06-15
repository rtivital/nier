const isFunction = require('../isFunction/isFunction');

module.exports = function complement(fn) {
  if (!isFunction(fn)) {
    throw new Error('complement received argument that is not function');
  }

  return (...args) => !fn(...args);
};
