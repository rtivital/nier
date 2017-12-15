const test = require('tape-catch');
const groupBy = require('./groupBy');
const testUtils = require('../../testUtils');

const frameworks = [
  { name: 'Angular', version: 2 },
  { name: 'Backbone', version: 1 },
  { noNameFound: 'oops', version: 'latest' },
];

const groupBydFrameworks = {
  Angular: {
    name: 'Angular',
    version: 2,
  },

  Backbone: {
    name: 'Backbone',
    version: 1,
  },
};

test('groupBy', (t) => {
  testUtils.isCurried(t, groupBy('name'));

  t.deepEquals(
    groupBy('name', frameworks),
    groupBydFrameworks,
    'groupBys array of items'
  );

  t.end();
});
