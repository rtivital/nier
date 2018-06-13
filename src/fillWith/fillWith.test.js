const test = require('tape-catch');
const testUtils = require('../../testUtils');
const fillWith = require('./fillWith');

test('fillWith', (t) => {
  testUtils.isCurried(t, fillWith(5));
  t.throws(() => fillWith(null, () => 5), 'throws if provided length is not a valid number');
  t.throws(() => fillWith(5, null), 'throws if provided callback is not a function');
  t.deepEquals(fillWith(3, f => f), [0, 1, 2], 'provides index to callback');

  t.end();
});
