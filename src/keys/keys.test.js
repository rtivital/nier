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

  t.end();
});
