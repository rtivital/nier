const test = require('tape-catch');
const update = require('./update');

test('update', (t) => {
  t.equals(typeof update(1), 'function', 'is curried');

  t.deepEquals(
    update(1, 'hello', ['you', 'hi', 'there']),
    ['you', 'hello', 'there'],
    'updates value at provided index'
  );

  t.deepEquals(
    update(10, 'hello', [1, 2]),
    [1, 2],
    'does not update array if value does not exist'
  );

  t.deepEquals(
    update(-1, 'hello', [1, 2, 3]),
    [1, 2, 'hello'],
    'updates value with negative index'
  );

  t.end();
});
