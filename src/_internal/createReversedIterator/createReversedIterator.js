const curry = require('../../curry/curry');
const SIGNATURES = require('../signatures');

module.exports = function createReversedIterator(iterator) {
  const reversedIterator = curry(iterator);
  reversedIterator[SIGNATURES.reversedIterator] = true;
  return reversedIterator;
};
