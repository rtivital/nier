const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const cloneArrayLike = require('../_internal/cloneArrayLike/cloneArrayLike');
const isString = require('../isString/isString');
const curry = require('../curry/curry');

function slice(from, to, collection) {
  if (!isArrayLike(collection)) {
    throw new Error('N.slice received collection that is not array or array like');
  }

  const arrayCollection = cloneArrayLike(collection);
  const slicedCollection = arrayCollection.slice(from, to);

  return isString(collection) ? slicedCollection.join('') : slicedCollection;
}

module.exports = curry(slice);
