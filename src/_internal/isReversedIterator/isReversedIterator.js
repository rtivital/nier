const SIGNATURES = require('../signatures');

module.exports = function isReversedIterator(fn) {
  return !!fn[SIGNATURES.reversedIterator];
};
