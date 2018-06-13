const test = require('tape-catch');
const testUtils = require('../../testUtils');
const flatten = require('./flatten');

test('flatten', (t) => {
  testUtils.isCurried(t, flatten());

  t.deepEquals(flatten([1, [2], 3]), [1, 2, 3], 'flattens array with single level of nesting');
  t.deepEquals(flatten([1, 2, 3]), [1, 2, 3], 'does not modify already flat arrays');
  t.deepEquals(
    flatten([[[[[1], 2]]], [3], 4, [5, [6, 7]]]),
    [1, 2, 3, 4, 5, 6, 7],
    'flattens array with multiple levels of nesting'
  );

  t.end();
});
