const curry = require('../../curry/curry');
const assignSignature = require('../assignSignature/assignSignature');

module.exports = function createReversedIterator(iterator) {
  const reversedIterator = curry(iterator);
  return assignSignature('reversedIterator', true, reversedIterator);
};
