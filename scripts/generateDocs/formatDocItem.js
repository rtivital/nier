const N = require('../../src');
const extractTagContent = require('./extractTagContent');

const extractDescription = N.path(['description', 'full']);
const extractName = N.path(['ctx', 'name']);

const extractParams = N.pipe(
  N.path('tags'),
  N.filter(N.whereEq({ type: 'param' })),
  N.map(N.pick(['name', 'description', 'typesDescription']))
);

module.exports = function format(docItem) {
  return {
    name: extractName(docItem),
    since: extractTagContent('since')(docItem),
    see: extractTagContent('see')(docItem),
    category: extractTagContent('category')(docItem),
    examples: extractTagContent('example')(docItem),
    description: extractDescription(docItem),
    params: extractParams(docItem),
  };
};
