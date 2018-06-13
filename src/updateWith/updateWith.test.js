const test = require('tape-catch');
const testUtils = require('../../testUtils');
const updateWith = require('./updateWith');

test('N.updateWith', (t) => {
  testUtils.isCurried(t, updateWith(1, f => f));

  t.throws(() => updateWith(1, null, [1, 2, 3]), 'throws if receives non function callback');
  t.throws(() => updateWith(1, f => f, null), 'throws if receives non array data structure');

  t.deepEquals(updateWith(0, i => i + 10, [1, 2, 3]), [11, 2, 3], 'updates value at index with callback');
  t.deepEquals(updateWith(-1, i => i + 10, [1, 2, 3]), [1, 2, 13], 'updates value with negative index');
  t.deepEquals(updateWith(40, i => i + 10, [1, 2, 3]), [1, 2, 3], 'does not modify array if value does not exist');

  t.end();
});
