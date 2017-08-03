const test = require('tape-catch');
const testUtils = require('../../testUtils');
const pluck = require('./pluck');

test.only('pluck', (t) => {
  testUtils.isCurried(t, pluck);

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
    'adds undefined to array where path is not present'
  );

  t.end();
});
