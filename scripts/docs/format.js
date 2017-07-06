const N = require('../../src');

const extractParams = N.reduce((acc, item) => {
  if (item.type === 'param') {
    acc[item.name] = item;
  }

  return acc;
}, {});

module.exports = function format(docItem) {
  return extractParams(docItem.tags);
};
