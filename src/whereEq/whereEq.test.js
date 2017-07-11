const test = require('tape-catch');
const whereEq = require('./whereEq');

test('whereEq', (t) => {
  t.equals(
    typeof whereEq({ a: 1 }),
    'function',
    'is curried'
  );

  t.true(
    whereEq({ a: 1 })({ a: 1, b: 2 }),
    'returs true if object matches predictate'
  );

  t.true(
    whereEq({ a: { b: 'hello' } })({ a: { b: 'hello' }, b: 1 }),
    'returs true with comparing nested object values'
  );

  t.false(
    whereEq({ a: 2 })({ a: 1, b: 2 }),
    'returs true if object does not match predictate'
  );

  t.false(
    whereEq({ a: [1, 2] })({ a: [1, 1], b: 1 }),
    'returs false if object deep value does not match predictate'
  );

  t.end();
});
