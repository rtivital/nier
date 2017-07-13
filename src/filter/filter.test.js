const test = require('tape-catch');
const filter = require('./filter');
const isCurried = require('../../testUtils/isCurried');
const noIndex = require('../../testUtils/noIndex');

test('filter', (t) => {
  isCurried(t, filter(f => f));
  noIndex(t, { fn: filter, data: [1, 2, 3, 4], result: [1, 2, 3, 4] });

  t.deepEquals(
    filter(f => !!f, [0, false, '', 1, true]),
    [1, true],
    'filters based on item'
  );

  t.end();
});
