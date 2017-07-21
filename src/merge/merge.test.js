const test = require('tape-catch');
const testUtils = require('../../testUtils');
const merge = require('./merge');

test('merge', (t) => {
  testUtils.isCurried(t, merge({ a: 1 }));

  t.deepEquals(
    merge({ a: 1 }, { b: 2 }),
    { a: 1, b: 2 },
    'merges two objects without intersections'
  );

  t.deepEquals(
    merge({ a: 1, b: 3 }, { a: 2 }),
    { a: 2, b: 3 },
    'merges two objects with intersections'
  );

  t.end();
});
