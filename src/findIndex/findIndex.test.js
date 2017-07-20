const test = require('tape-catch');
const findIndex = require('./findIndex');
const testUtils = require('../../testUtils');

test('findIndex', (t) => {
  testUtils.isCurried(t, findIndex(val => val > 2));
  testUtils.noIndex(t, { fn: findIndex, data: [1, 2, 3], result: 0 });
  testUtils.withIndex(t, { fn: findIndex, data: [1, 2], indexResult: 1, dataResult: 0 });

  t.equals(
    findIndex(val => val > 2, [0, 1, 2, 3, 4]),
    3,
    'returns first matching index'
  );

  t.equals(
    findIndex(val => val > 10, [0, 1, 2, 3, 4]),
    -1,
    'returns -1 if no value mached'
  );

  t.end();
});
