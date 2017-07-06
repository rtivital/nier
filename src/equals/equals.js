const isPrimitive = require('../_internal/isPrimitive/isPrimitive');
const curry = require('../curry/curry');

function equals(a, b) {
  const typeOfA = typeof a;
  const typeOfB = typeof b;

  if (isPrimitive(a) || isPrimitive(b)) {
    if (typeOfA === 'number' && typeOfB === 'number') {
      return isNaN(a) ? isNaN(b) : a === b;
    }

    return a === b;
  }

  return true;
}

module.exports = curry(equals);
