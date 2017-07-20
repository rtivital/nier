const test = require('tape-catch');
const map = require('./map');
const testUtils = require('../../testUtils');
const withIndex = require('../withIndex/withIndex');

test.only('map', (t) => {
  testUtils.isCurried(t, map(val => val * 2));
  testUtils.noIndex(t, { fn: map, data: [1, 2, 3], result: [true, true, true] });

  t.deepEquals(
    map(val => val * 2, [1, 2, 3]),
    [2, 4, 6],
    'maps over array'
  );

  t.deepEquals(
    withIndex(map)((val, index) => index * 2, [1, 2, 3]),
    [0, 2, 4],
    'works with withIndex module'
  );

  t.end();
});
