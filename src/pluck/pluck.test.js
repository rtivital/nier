const test = require('tape-catch');
const testUtils = require('../../testUtils');
const pluck = require('./pluck');

test('pluck', (t) => {
  testUtils.isCurried(t, pluck);

  t.throws(
    () => pluck('a', {}),
    'throws if receives non array value'
  );

  t.throws(
    () => pluck(null, []),
    'throws if receives invalid pathgs value'
  );

  t.deepEquals(
    pluck('a', [{ a: 1 }, { a: 2 }, { a: 3 }]),
    [1, 2, 3],
    'extracts prop from array of objects'
  );

  t.deepEquals(
    pluck('a', [{ a: 1 }, { b: 2 }, { a: 3 }]),
    [1, undefined, 3],
    'adds undefined to array where prop is not present'
  );

  t.deepEquals(
    pluck(['a', 'b'], [{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }]),
    [1, 2, 3],
    'extracts path from array of objects'
  );

  t.deepEquals(
    pluck(['a', 'b'], [{ a: { b: 1 } }, { a: { c: 2 } }, { a: { b: 3 } }]),
    [1, undefined, 3],
    'adds undefined to array where path is not present in object'
  );

  t.deepEquals(
    pluck(0, [[1, 'a'], [2, 'b'], [3, 'c']]),
    [1, 2, 3],
    'extracts path from nested arrays'
  );

  t.deepEquals(
    pluck(1, [[1, 1], [2], [3, 3]]),
    [1, undefined, 3],
    'adds undefined to array where path is not present in array'
  );

  t.deepEquals(
    pluck(['a', 0], [{ a: [1, 'a'] }, { a: [2, 'b'] }, { a: [3, 'c'] }]),
    [1, 2, 3],
    'extracts path from nested arrays in objects'
  );

  t.end();
});
