const test = require('tape-catch');
const findIndex = require('./findIndex');
const isCurried = require('../../testUtils/isCurried');

test('findIndex', (t) => {
  isCurried(t, findIndex(val => val > 2));

  t.equals(
    findIndex(val => val > 2, [0, 1, 2, 3, 4]),
    3,
    'returns first matching index'
  );

  t.equals(
    findIndex(val => val > 2, [4, 1, 2, 3, 4]),
    0,
    'returns first index that mached'
  );

  t.equals(
    findIndex(val => val > 10, [0, 1, 2, 3, 4]),
    -1,
    'returns -1 if no value mached'
  );

  t.end();
});
