const N = require('../../src');

const extractParams = N.pipe(
  N.filter(N.whereEq({ type: 'param' })),
  N.reduce((acc, item) => N.set(item.name, item, acc), {})
);

module.exports = function format(docItem) {
  return extractParams(docItem.tags);
};
