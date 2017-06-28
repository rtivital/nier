const curry = require('../curry/curry');

function call(fn, ...args) {
  return fn(...args);
}

module.exports = curry(call, 2);
