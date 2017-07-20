const curry = require('../../curry/curry');
const SIGNATURES = require('../signatures');

module.exports = function createReversedIterator(iterator) {
  const reversedIterator = curry(iterator);

  Object.defineProperty(reversedIterator, SIGNATURES.reversedIterator, {
    value: true,
    configurable: false,
    enumerable: false,
    writable: false,
  });

  return reversedIterator;
};
