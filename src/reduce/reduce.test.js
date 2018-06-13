const test = require('tape-catch');
const reduce = require('./reduce');
const testUtils = require('../../testUtils');

test('N.reduce', (t) => {
  testUtils.isCurried(t, reduce(val => val));
  t.equals(reduce((acc, item) => item + acc, 0, [1, 2, 3, 4, 5]), 15, 'reduces array');

  t.end();
});
