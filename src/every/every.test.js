const test = require('tape-catch');
const every = require('./every');
const testUtils = require('../../testUtils');

test('N.every', (t) => {
  testUtils.isCurried(t, every(() => true));
  testUtils.noIndex(t, { fn: every, data: [1, 2, 3], result: true });

  t.false(every(val => val === 2, [2, 2, 3]), 'returns false if any item did not pass');
  t.true(every(val => val === 2, [2, 2, 2]), 'returns true if all items passed the check');

  t.end();
});
