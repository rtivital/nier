const test = require('tape-catch');
const findLastIndex = require('./findLastIndex');
const isCurried = require('../../testUtils/isCurried');

test('findLastIndex', (t) => {
  isCurried(t, findLastIndex(val => val > 2));

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
