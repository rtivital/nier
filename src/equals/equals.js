const curry = require('../curry/curry');
const keys = require('../keys/keys');
const type = require('../type/type');


/**
 * Returns true if two passed values are equal.
 *
 * @since v1.0.0
 * @category Language
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 *
 * @example
 * N.equals(1, 1); // -> true
 * N.equals('hello', 'hello!'); // -> false
 * N.equals(true, true); // -> true
 * N.equals(null, undefined); // -> false
 * N.equals({ a: 1 }, { a: 1 }); // -> true
 * N.equals({ a: { b: 1 } }, { a: { b: 1 } }); // -> true
 * N.equals({ a: { b: 1 } }, { a: { b: 2 } }); // -> false
 * N.equals({ a: [1, 2, 3] }, { a: [1, 2, 3] }); // -> true
 * N.equals({ a: [1, 2, 3] }, { a: [1, 2, 3, 4] }); // -> false
 * N.equals([1, 2, 3], [1, 2, 3]); // -> true
 * N.equals([1, 2, 3], [1, 2, 3, 4]); // -> false
 * N.equals([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }]); // -> true
 * N.equals([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 3 }]); // -> false
 */
function equals(a, b) {
  const aType = type(a);
  const bType = type(b);

  if (aType !== bType) {
    return false;
  }

  switch (aType) {
    case 'Number': {
      return isNaN(a) ? isNaN(b) : a === b;
    }

    case 'Array': {
      if (a.length !== b.length) {
        return false;
      }

      for (let i = 0; i < a.length; i += 1) {
        if (!equals(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    case 'Object': {
      const aKeys = keys(a).sort();
      const bKeys = keys(b).sort();

      if (!equals(aKeys, bKeys)) {
        return false;
      }

      for (let i = 0, l = aKeys.length; i < l; i += 1) {
        if (!equals(a[aKeys[i]], b[aKeys[i]])) {
          return false;
        }
      }

      return true;
    }

    default: {
      return a === b;
    }
  }
}

module.exports = curry(equals);
