const test = require('tape-catch');
const testUtils = require('../../testUtils');
const amount = require('./amount');

test('amount', (t) => {
  testUtils.isCurried(t, amount(f => f));
  testUtils.noIndex(t, { fn: amount, data: [1, 2, 3], result: 3 });
  testUtils.withIndex(t, { fn: amount, data: [1, 2], indexResult: 1, dataResult: 2 });

  t.throws(
    () => amount(item => item === 1, null),
    /N.amount received list argument that is not an array or array like data structure/,
    'throws if receives list argument that is not array or array like data structure'
  );

  t.equals(
    amount(item => item === 1, [1, 2, 3, 1, 1]),
    3,
    'detects right amount of existing items'
  );

  t.equals(
    amount(item => item === 1, [2, 3, 4]),
    0,
    'detects right amount of unexisting items'
  );

  t.end();
});
