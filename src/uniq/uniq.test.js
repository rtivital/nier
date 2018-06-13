const test = require('tape-catch');
const testUtils = require('../../testUtils');
const uniq = require('./uniq');

test('uniq', (t) => {
  testUtils.isCurried(t, uniq());

  t.deepEquals(uniq([1, 1, 1, 2, 3]), [1, 2, 3], 'removes duplicate primitives values from array');
  t.deepEquals(uniq([1, 2, 3]), [1, 2, 3], 'return unchanges array if nothing should be removed');
  t.deepEquals(
    uniq([{ a: 1 }, { b: 2 }, { a: 1 }]),
    [{ a: 1 }, { b: 2 }],
    'removes duplicate object values from array'
  );

  t.end();
});
