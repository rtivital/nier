const test = require('tape-catch');
const findLast = require('./findLast');

const findLastEven = findLast(value => value % 2 === 0);

test('find', (t) => {
  t.equals(
    typeof findLastEven,
    'function',
    'is curried'
  );

  t.equals(
    findLastEven([2, 4, 6, 500]),
    500,
    'finds last value'
  );

  t.equals(
    findLastEven([1, 1, 1]),
    undefined,
    'returns undefined if value was not found'
  );

  t.end();
});
