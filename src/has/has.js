const _isValidPath = require('../_internal/isValidPath/isValidPath');
const curry = require('../curry/curry');

/**
 * Returns true if an object or an array has the provided path, false otherwise
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Array|string} path path to tests
 * @param {Array|Object} object
 * @return {boolean}
 *
 * @see path, where, whereEq
 *
 * @example
 * N.has('a', { a: 1, b: 2 }); // -> true
 * N.has('c', { a: 1, b: 2 }); // -> false
 * N.has(['a', 'b'], { a: { b: 1 }, c: 2 }); // -> true
 * N.has(0, ['hello', 'nier']); // -> true
 * N.has(2, ['hello', 'nier']); // -> false
 * N.has([0, 'a', 'b'], [{ a: { b: 2 }, c: 1 }, { c: 1 }]); // -> true
 * N.has([2, 'a', 'b'], [{ a: { b: 2 }, c: 1 }, { c: 1 }]); // -> false
 * N.has(['a', 0, 'b'], { a: [{ b: 1 }, { c: 2 }], d: 3 }); // -> true
 * N.has(['a', 2, 'b'], { a: [{ b: 1 }, { c: 2 }], d: 3 }); // -> false
 */
function has(path, object) {
  if (object == null || !_isValidPath(path)) {
    return false;
  }

  const pathType = typeof path;

  if (pathType === 'string' || pathType === 'number') {
    return Object.prototype.hasOwnProperty.call(object, path);
  }

  const pathToTest = path[0];

  if (path.length > 1) {
    return has(path.slice(1), object[pathToTest]);
  }

  return has(pathToTest, object);
}

module.exports = curry(has);
