const curry = require('../curry/curry');
const isFunction = require('../isFunction/isFunction');

// fn не функция

function call(fn, ...args) {
  if (!isFunction(fn)) {
    throw new Error('N.call received first argument which type is not function');
  }

  return fn(...args);
}

module.exports = curry(call, 2);
