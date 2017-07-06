const isPrimitive = require('../_internal/isPrimitive/isPrimitive');
const curry = require('../curry/curry');

function equals(a, b) {
  const aIsPrimitive = isPrimitive(a);
  const bIsPrimitive = isPrimitive(b);
  const typeOfA = typeof a;
  const typeOfB = typeof b;

  if (aIsPrimitive || bIsPrimitive) {
    if (typeOfA === 'number' && typeOfB === 'number') {
      return isNaN(a) ? isNaN(b) : a === b;
    }

    return a === b;
  }

  if ((aIsPrimitive && !bIsPrimitive) || (!aIsPrimitive && bIsPrimitive)) {
    return false;
  }

  return true;
}

module.exports = curry(equals);
