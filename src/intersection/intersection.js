const _isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const curry = require('../curry/curry');
const includes = require('../includes/includes');

function intersection(a, b) {
  if (!_isArrayLike(a)) {
    throw new Error('N.intersection received first argument that is not an array or array like data structure');
  }

  if (!_isArrayLike(a)) {
    throw new Error('N.intersection received second argument that is not an array or array like data structure');
  }

  const result = [];

  for (let i = 0, l = a.length; i < l; i += 1) {
    if (includes(a[i], b)) {
      result.push(a[i]);
    }
  }

  return result;
}

module.exports = curry(intersection);
