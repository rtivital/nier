const curry = require('../../curry/curry');

module.exports = function createReversedIterator(iterator) {
  const reversedIterator = curry(iterator);
  reversedIterator['@@nier/reversedIterator'] = true;
  return reversedIterator;
};
