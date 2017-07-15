const test = require('tape-catch');
const testUtils = require('../../testUtils');
const includes = require('./includes');

test('includes', (t) => {
  testUtils.isCurried(t, includes(5));

  t.true(
    includes(1, [0, 1, 2]),
    'returns true if value is included in the array'
  );

  t.false(
    includes(5, [0, 1, 2]),
    'returns false if value is not included in the array'
  );

  t.end();
});
