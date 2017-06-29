const test = require('tape-catch');
const findLastIndex = require('./findLastIndex');

const find2 = value => value === 2;

test('findLastIndex', (t) => {
  t.equals(
    typeof findLastIndex(find2),
    'function',
    'is curried'
  );

  t.equals(
    findLastIndex(find2, [0, 1, 2, 3, 4]),
    2,
    'returns index if it exists'
  );

  t.equals(
    findLastIndex(find2, [2, 2, 2, 2, 2]),
    4,
    'returns last index that is found'
  );

  t.equals(
    findLastIndex(find2, [0, 1, 3, 4]),
    -1,
    'returns -1 if no value mached'
  );

  t.end();
});
