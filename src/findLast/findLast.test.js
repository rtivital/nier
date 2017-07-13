const test = require('tape-catch');
const findLast = require('./findLast');
const testUtils = require('../../testUtils');

test('findLast', (t) => {
  testUtils.isCurried(t, findLast(val => val > 2));
  testUtils.noIndex(t, { fn: findLast, data: [0, 1, 2], result: 2 });

  t.equals(
    findLast(val => val > 2, [1, 2, 3, 4, 5, 2]),
    5,
    'finds last matching element'
  );

  t.equals(
    findLast(val => val > 2, [1, 1, 1]),
    undefined,
    'returns undefined if there is no matching elements in the array'
  );

  t.end();
});
