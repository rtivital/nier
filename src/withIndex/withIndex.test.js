const test = require('tape-catch');
const testUtils = require('../../testUtils');
const withIndex = require('./withIndex');
const map = require('../map/map');
const reduce = require('../reduce/reduce');

test('withIndex', (t) => {
  testUtils.isCurried(t, withIndex);
  testUtils.isCurried(t, withIndex(map)(val => val * 2), 'produces curriediterator function');

  t.deepEquals(
    withIndex(map)((_, index) => index + 1, [10, 20, 30]),
    [1, 2, 3],
    'provides index to two arguments iterator function'
  );

  t.deepEquals(
    withIndex(map)((_, __, array) => array, [10, 20, 30]),
    [[10, 20, 30], [10, 20, 30], [10, 20, 30]],
    'provides array to two arguments iterator function'
  );

  t.equals(
    withIndex(reduce)((acc, _, index) => acc + index, 0, [1, 2, 3]),
    3,
    'provides index to three arguments iterator function'
  );

  t.deepEquals(
    withIndex(reduce)((acc, _, index, array) => { acc[index] = array; return acc; }, {}, [1, 2, 3]),
    {
      0: [1, 2, 3],
      1: [1, 2, 3],
      2: [1, 2, 3],
    },
    'provides array to three arguments iterator function'
  );

  t.end();
});
