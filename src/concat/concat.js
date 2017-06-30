const curry = require('../curry/curry');

function concat(a, b) {
  return [...a, ...b];
}

module.exports = curry(concat);
