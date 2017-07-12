const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const isString = require('../isString/isString');
const curry = require('../curry/curry');

function concat(a, b) {
  if (!isArrayLike(a) || !isArrayLike(b)) {
    throw new Error('N.concat received values that can not be concated');
  }

  const aClone = cloneArrayLike(a);
  const bClone = cloneArrayLike(b);
  const concated = aClone.concat(bClone);

  if (isString(a) && isString(b)) {
    return concated.join('');
  }

  return isString(a) && isString(b) ? concated.join('') : concated;
}

module.exports = curry(concat);
