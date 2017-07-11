const test = require('tape-catch');
const normalize = require('./normalize');

const frameworks = [
  { name: 'Angular', version: 2 },
  { name: 'Backbone', version: 1 },
  { noNameFound: 'oops', version: 'latest' },
];

const normalizedFrameworks = {
  Angular: {
    name: 'Angular',
    version: 2,
  },

  Backbone: {
    name: 'Backbone',
    version: 1,
  },
};

test('normalize', (t) => {
  t.equals(
    typeof normalize('name'),
    'function',
    'is curried'
  );

  t.deepEquals(
    normalize('name', frameworks),
    normalizedFrameworks,
    'normalizes array of items'
  );

  t.end();
});
