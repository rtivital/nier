const curry = require('../curry/curry');

function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp');
  }

  return Math.max(Math.min(value, max), min);
}

module.exports = curry(clamp);
