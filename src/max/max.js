const curry = require('../curry/curry');

function max(a, b) {
  return a > b ? a : b;
}

module.exports = curry(max);
