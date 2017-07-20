const test = require('tape-catch');
const filter = require('./filter');
const testUtils = require('../../testUtils');

test('filter', (t) => {
  testUtils.isCurried(t, filter(f => f));
  testUtils.noIndex(t, { fn: filter, data: [1, 2, 3, 4], result: [1, 2, 3, 4] });
  testUtils.withIndex(t, { fn: filter, data: [1, 2], indexResult: [2], dataResult: [1, 2] });

  t.deepEquals(
    filter(f => !!f, [0, false, '', 1, true]),
    [1, true],
    'filters based on item'
  );

  t.end();
});
