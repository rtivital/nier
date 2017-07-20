const test = require('tape-catch');
const findLastIndex = require('./findLastIndex');
const testUtils = require('../../testUtils');

test('findLastIndex', (t) => {
  testUtils.isCurried(t, findLastIndex(val => val > 2));
  testUtils.noIndex(t, { fn: findLastIndex, data: [0, 1, 2, 2], result: 3 });
  testUtils.withIndex(t, { fn: findLastIndex, data: [1, 2, 3], indexResult: 2, dataResult: 2 });

  t.equals(
    findLastIndex(val => val > 2, [0, 1, 2, 3, 2]),
    3,
    'returns index of last matching element'
  );

  t.equals(
    findLastIndex(val => val > 2, [0, 1, 0, 1]),
    -1,
    'returns -1 there is no matching elements'
  );

  t.end();
});
