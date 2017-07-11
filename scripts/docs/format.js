const N = require('../../src');

const extractParams = N.pipe(
  N.filter(N.whereEq({ type: 'param' })),
  N.normalize('name')
);

module.exports = function format(docItem) {
  return extractParams(docItem.tags);
};
