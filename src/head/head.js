const isArrayLike = require('../_internal/isArrayLike/isArrayLike');
const curry = require('../curry/curry');

function head(collection) {
  if (isArrayLike(collection)) {
    return collection[0];
  }

  return undefined;
}

module.exports = curry(head);
