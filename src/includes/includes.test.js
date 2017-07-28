const test = require('tape-catch');
const testUtils = require('../../testUtils');
const includes = require('./includes');

test('includes', (t) => {
  testUtils.isCurried(t, includes(5));

  t.throws(
    () => includes(1, null),
    'throws if receives uncompatable value'
  );

  t.true(
    includes(1, [0, 1, 2]),
    'returns true if value is included in the array'
  );

  t.false(
    includes(5, [0, 1, 2]),
    'returns false if value is not included in the array'
  );

  t.true(
    includes('hello', 'hello, nier!'),
    'returs true if substring is included in string'
  );

  t.false(
    includes('not included', 'hello, nier!'),
    'returns false if substring is not included in string'
  );

  t.end();
});
