const test = require('tape-catch');
const keys = require('./keys');

test('keys', (t) => {
  t.equals(
    typeof keys(),
    'function',
    'is curried'
  );

  t.deepEquals(
    keys({ a: 1, b: 2 }),
    Object.keys({ a: 1, b: 2 }),
    'works as Object.keys'
  );

  t.deepEquals(
    keys(null),
    [],
    'returns empty array for undefined'
  );

  t.deepEquals(
    keys(undefined),
    [],
    'returns empty array for undefined'
  );

  t.end();
});
