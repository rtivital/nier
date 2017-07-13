const isPrimitive = require('../_internal/isPrimitive/isPrimitive');
const curry = require('../curry/curry');
const keys = require('../keys/keys');
const type = require('../type/type');

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

  const aType = type(a);
  const bType = type(b);

  if (aType !== bType) {
    return false;
  }

  if (aType === 'Array') {
    const aLength = a.length;
    const bLength = b.length;

    if (aLength !== bLength) {
      return false;
    }

    for (let i = 0; i < aLength; i += 1) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  if (aType === 'Object') {
    const aKeys = keys(a).sort();
    const bKeys = keys(b).sort();

    if ((aKeys.length !== bKeys.length) || !equals(aKeys, bKeys)) {
      return false;
    }

    for (let i = 0, l = aKeys.length; i < l; i += 1) {
      if (!equals(a[aKeys[i]], b[aKeys[i]])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
}

module.exports = curry(equals);
