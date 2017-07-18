const N = require('../../src');

const extractString = param => N.pipe(
  N.path('tags'),
  N.find(N.whereEq({ type: param })),
  N.path('string')
);

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
    since: extractString('since')(docItem),
    category: extractString('category')(docItem),
    examples: extractString('example')(docItem),
    description: extractDescription(docItem),
    params: extractParams(docItem),
  };
};
