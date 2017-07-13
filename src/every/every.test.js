const test = require('tape-catch');
const every = require('./every');
const isCurried = require('../../testUtils/isCurried');

test('every', (t) => {
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
    every((val, index, data) => index === undefined && data === undefined, [3, 2, 1]),
    'does not provide index and data to callback'
  );

  t.end();
});
