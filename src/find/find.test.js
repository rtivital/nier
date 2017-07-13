const test = require('tape-catch');
const find = require('./find');
const isCurried = require('../../testUtils/isCurried');

test('find', (t) => {
  isCurried(t, find(val => val === 2));

  t.equals(
    find(val => val > 2, [1, 2, 3, 4, 5]),
    3,
    'finds first maching value'
  );

  t.equals(
    find(val => val > 2, [1, 1, 1]),
    undefined,
    'returns undefined if none of the values mached'
  );

  t.end();
});
