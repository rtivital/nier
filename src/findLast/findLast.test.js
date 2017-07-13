const test = require('tape-catch');
const findLast = require('./findLast');
const isCurried = require('../../testUtils/isCurried');

test('findLast', (t) => {
  isCurried(t, findLast(val => val > 2));

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

  t.equals(
    findLast((item, index, data) => index === undefined && data === undefined, [0, 1, 2]),
    2,
    'does not provide index and data to callback'
  );

  t.end();
});
