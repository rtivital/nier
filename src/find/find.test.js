const test = require('tape-catch');
const find = require('./find');

const find2 = find(value => value === 2);

test('find', (t) => {
  t.equals(
    typeof find2,
    'function',
    'is curried'
  );

  t.equals(
    find2([1, 2, 3]),
    2,
    'finds value'
  );

  t.equals(
    find2([1, 1, 1]),
    undefined,
    'returns undefined if value was not found'
  );

  t.end();
});
