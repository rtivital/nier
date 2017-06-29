const curry = require('../curry/curry');

function min(a, b) {
  return a > b ? b : a;
}

module.exports = curry(min);
