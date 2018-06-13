const test = require('tape-catch');
const map = require('./map');
const testUtils = require('../../testUtils');

test('map', (t) => {
  testUtils.isCurried(t, map(val => val * 2));
  testUtils.noIndex(t, { fn: map, data: [1, 2, 3], result: [true, true, true] });
  testUtils.withIndex(t, { fn: map, data: [1, 2], indexResult: [0, 1], dataResult: [[1, 2], [1, 2]] });
  t.deepEquals(map(val => val * 2, [1, 2, 3]), [2, 4, 6], 'maps over array');

  t.end();
});
