const test = require('tape-catch');
const testUtils = require('../../testUtils');
const withIndex = require('./withIndex');
const map = require('../map/map');

test('withIndex', (t) => {
  testUtils.isCurried(t, withIndex);
  testUtils.isCurried(t, withIndex(map)(val => val * 2), 'produces curriediterator function');

  t.deepEquals(
    withIndex(map)((_, index) => index + 1, [10, 20, 30]),
    [1, 2, 3],
    'provides index to iterator function'
  );

  t.deepEquals(
    withIndex(map)((_, __, array) => array, [10, 20, 30]),
    [[10, 20, 30], [10, 20, 30], [10, 20, 30]],
    'provides array to iterator function'
  );

  t.end();
});
