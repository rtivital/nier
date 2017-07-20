const test = require('tape-catch');
const none = require('./none');
const testUtils = require('../../testUtils');

test('none', (t) => {
  testUtils.isCurried(t, none(() => true));
  testUtils.noIndex(t, { fn: none, data: [1, 2, 3], result: false });
  testUtils.withIndex(t, { fn: none, data: [1, 2], indexResult: false, dataResult: false });

  t.true(
    none(val => val === 2, [3, 3, 3]),
    'returns true if any item did not pass'
  );

  t.false(
    none(val => val === 2, [2, 2, 2]),
    'returns false if all items passed the check'
  );

  t.end();
});
