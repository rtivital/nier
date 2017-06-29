const test = require('tape-catch');
const findIndex = require('./findIndex');

const find2 = value => value === 2;

test('findIndex', (t) => {
  t.equals(
    typeof findIndex(find2),
    'function',
    'is curried'
  );

  t.equals(
    findIndex(find2, [0, 1, 2, 3, 4]),
    2,
    'returns index if it exists'
  );

  t.equals(
    findIndex(find2, [2, 2, 2, 2, 2]),
    0,
    'returns first index that is found'
  );

  t.equals(
    findIndex(find2, [0, 1, 3, 4]),
    -1,
    'returns -1 if no value mached'
  );

  t.end();
});
