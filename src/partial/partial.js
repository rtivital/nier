const isFunction = require('../isFunction/isFunction');

module.exports = function partial(fn, ...predefined) {
  if (!isFunction(fn)) {
    throw new Error('partial received first argument that is not a function');
  }

  return (...args) => fn(...predefined, ...args);
};
