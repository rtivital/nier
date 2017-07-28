const Highlight = require('highlight.js');
const N = require('../../src');

function extractTagContent(tag) {
  return N.pipe(
    N.path('tags'),
    N.find(N.whereEq({ type: tag })),
    N.path('string')
  );
}

function extractExamples(docItem) {
  const examples = extractTagContent('example')(docItem);
  return Highlight.highlight('js', examples).value;
}

module.exports = function format(docItem) {
  return {
    name: N.path(['ctx', 'name'], docItem),
    since: extractTagContent('since')(docItem),
    see: extractTagContent('see')(docItem),
    alias: extractTagContent('alias')(docItem),
    category: extractTagContent('category')(docItem),
    examples: extractExamples(docItem),
    description: N.path(['description', 'full'], docItem).replace(/<(?:.|\n)*?>/gm, ''),
    params: N.pipe(
      N.path('tags'),
      N.filter(N.whereEq({ type: 'param' })),
      N.map(N.pick(['name', 'description', 'typesDescription']))
    )(docItem),
  };
};
