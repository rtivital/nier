const N = require('../../src');

module.exports = function extractTagContent(tag) {
  return N.pipe(
    N.path('tags'),
    N.find(N.whereEq({ type: tag })),
    N.path('string')
  );
};
