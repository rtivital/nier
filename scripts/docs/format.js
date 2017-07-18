const N = require('../../src');

const extractSince = N.pipe(
  N.path('tags'),
  N.find(N.whereEq({ type: 'since' })),
  N.path('string')
);

const extractCategory = N.pipe(
  N.path('tags'),
  N.find(N.whereEq({ type: 'category' })),
  N.path('string')
);

const extractExamples = N.pipe(
  N.path('tags'),
  N.find(N.whereEq({ type: 'example' })),
  N.path('string')
);

const extractDescription = N.path(['description', 'full']);
const extractName = N.path(['ctx', 'name']);

const extractParams = N.pipe(
  N.path('tags'),
  N.filter(N.whereEq({ type: 'param' })),
  N.map(item => ({ name: item.name, description: item.description, type: item.typesDescription }))
);

module.exports = function format(docItem) {
  return {
    name: extractName(docItem),
    since: extractSince(docItem),
    category: extractCategory(docItem),
    examples: extractExamples(docItem),
    description: extractDescription(docItem),
    params: extractParams(docItem),
  };
};
