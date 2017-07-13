const test = require('tape-catch');
const filter = require('./filter');
const isCurried = require('../../testUtils/isCurried');

test('filter', (t) => {
  isCurried(t, filter(f => f));

  t.deepEquals(
    filter(f => !!f, [0, false, '', 1, true]),
    [1, true],
    'filters based on item'
  );

  t.deepEquals(
    filter((item, index, data) => index === undefined && data === undefined, [1, 2, 3, 4]),
    [1, 2, 3, 4],
    'does not provide index and data to callback'
  );

  t.end();
});
