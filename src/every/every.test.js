const test = require('tape-catch');
const every = require('./every');
const isCurried = require('../../testUtils/isCurried');

test.only('every', (t) => {
  isCurried(t, every(() => true));

  t.false(
    every(val => val === 2, [2, 2, 3]),
    'returns false if any item did not pass'
  );

  t.true(
    every(val => val === 2, [2, 2, 2]),
    'returns true if all items passed the check'
  );

  t.true(
    every((val, index, data) => val + index === data.length, [3, 2, 1]),
    'provides index and data to callback'
  );

  t.end();
});
