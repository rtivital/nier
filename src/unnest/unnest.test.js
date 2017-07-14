const test = require('tape-catch');
const unnest = require('./unnest');
const testUtils = require('../../testUtils');

test('unnest', (t) => {
  testUtils.isCurried(t, unnest());
  t.throws(() => unnest(1), 'throws an error if received non array value');

  t.deepEquals(
    unnest([1, 2, 3]),
    [1, 2, 3],
    'does not modify flat arrays'
  );

  t.deepEquals(
    unnest([[1, [2]], 3, [4], [[5]]]),
    [1, [2], 3, 4, [5]],
    'removes single level of nesting'
  );

  t.end();
});
