const isPrimitive = require('../_internal/isPrimitive/isPrimitive');
const curry = require('../curry/curry');

function equals(a, b) {
  if (isPrimitive(a)) {
    return a === b;
  }

  return false;
}

module.exports = curry(equals);
