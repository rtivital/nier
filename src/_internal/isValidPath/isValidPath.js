/**
 * Returns true if provided value is string, number or Array of strings or numbers.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {*} path
 * @return {boolean}
 *
 * @example
 * isValidPath('hello'); // -> true
 * isValidPath([0, 'hello', 1, 'there', 2, 'nier', 3]); // -> true
 * isValidPath(0); // -> true
 *
 * isValidPath([]); // -> false
 * isValidPath(null); // -> false
 * isValidPath(Symbol('nier')); // -> false
 * isValidPath(false); // -> false
 * isValidPath(undefined); // -> false
 * isValidPath({}); // -> false
 * isValidPath(f => f); // -> false
 */
function isValidPath(path) {
  const pathType = typeof path;

  if (pathType === 'string' || pathType === 'number') {
    return true;
  }

  if (Array.isArray(path)) {
    const length = path.length;

    if (length === 0) {
      return false;
    }

    for (let i = 0; i < length; i += 1) {
      const elementType = typeof path[i];

      if (elementType !== 'string' && elementType !== 'number') {
        return false;
      }
    }

    return true;
  }

  return false;
}

module.exports = isValidPath;
