const test = require('tape-catch');
const testUtils = require('../../testUtils');
const fill = require('./fill');

test('fill', (t) => {
  testUtils.isCurried(t, fill(5));

  t.throws(
    () => fill(null, 'hello'),
    'throws if provided value is not a valid number'
  );

  t.deepEquals(
    fill(3, 'hello'),
    ['hello', 'hello', 'hello'],
    'fills array with primitive values'
  );

  t.deepEquals(
    fill(2, { a: 1 }),
    [{ a: 1 }, { a: 1 }],
    'fills array with object values'
  );

  t.end();
});
