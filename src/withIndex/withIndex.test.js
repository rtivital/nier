const test = require('tape-catch');
const testUtils = require('../../testUtils');
const withIndex = require('./withIndex');
const map = require('../map/map');
const reduce = require('../reduce/reduce');
const findLast = require('../findLast/findLast');

test('N.withIndex', (t) => {
  testUtils.isCurried(t, withIndex);
  testUtils.isCurried(t, withIndex(map)(val => val * 2), 'produces curriediterator function');

  t.deepEquals(
    withIndex(map)((item, index) => index + item, [10, 20, 30]),
    [10, 21, 32],
    'provides index to two arguments iterator function'
  );

  t.deepEquals(
    withIndex(map)((item, index, array) => array, [10, 20, 30]),
    [[10, 20, 30], [10, 20, 30], [10, 20, 30]],
    'provides array to two arguments iterator function'
  );

  t.equals(
    withIndex(reduce)((acc, item, index) => acc + index + item, 0, [0, 1, 2]),
    6,
    'provides index to three arguments iterator function'
  );

  t.deepEquals(
    withIndex(reduce)(
      (acc, _, index, array) => {
        acc[index] = array;
        return acc;
      },
      {},
      [1, 2, 3]
    ),
    {
      0: [1, 2, 3],
      1: [1, 2, 3],
      2: [1, 2, 3],
    },
    'provides array to three arguments iterator function'
  );

  t.equals(
    withIndex(findLast)((_, index, data) => data[index] > 5, [6, 7, 8, 10, 1, 5]),
    10,
    'provides reversed index to reversed iterator function'
  );

  t.end();
});
