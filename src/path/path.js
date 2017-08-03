const has = require('../has/has');
const curry = require('../curry/curry');


/**
 * Returns value at provided object path or undefined if path does not exist
 *
 * @since v1.0.0
 * @category Object
 *
 * @param {Array|string} pathTo path to retrieve
 * @param {Object} object
 * @return {*}
 *
 * @example
 * N.path('a', { a: 1, b: 2 }); // -> 1
 * N.path(['a', 'b'], { a: { b: 1 }, c: 3 }); // -> 1
 * N.path(['a', 'b', 'c'], { a: 1 }); // -> undefined
 */
function path(pathTo, object) {
  if (!has(pathTo, object)) {
    return undefined;
  }

  const pathToType = typeof pathTo;

  if (pathToType === 'string' || pathToType === 'number') {
    return object[pathTo];
  }

  let acc = object[pathTo[0]];
  for (let i = 1, l = pathTo.length; i < l; i += 1) {
    acc = acc[pathTo[i]];
  }

  return acc;
}

module.exports = curry(path);
