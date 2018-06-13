const test = require('tape-catch');
const slice = require('./slice');
const testUtils = require('../../testUtils');

test('N.slice', (t) => {
  testUtils.isCurried(t, slice(0, 2));

  t.throws(() => slice(0, 2, {}), 'throws if provided value that should be sliced is not array or array like');
  t.deepEquals(slice(0, 2, [1, 2, 3]), [1, 2], 'slices array');
  t.deepEquals(slice(0, -2, [1, 2, 3, 4]), [1, 2], 'works with negative indexes');
  t.equals(slice(1, 3, 'nier'), 'ie', 'slices strings');
  t.deepEquals(slice(0, 1, { 0: 'hello', 1: 'nier', length: 2 }), ['hello'], 'slices array like values');

  t.end();
});
