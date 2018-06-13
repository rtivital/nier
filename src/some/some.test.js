const test = require('tape-catch');
const some = require('./some');
const testUtils = require('../../testUtils');

test('N.some', (t) => {
  testUtils.isCurried(t, some(val => val > 2));
  testUtils.noIndex(t, { fn: some, data: [1, 2, 3], result: true });

  t.true(some(val => val > 2, [1, 2, 3]), 'returns true if callback matched at least one item');
  t.false(some(val => val > 2, [1, 2, 2]), 'returns false if callback did not match any items');

  t.end();
});
