const test = require('tape-catch');
const values = require('./values');

test('values', (t) => {
  t.deepEquals(
    values({ a: 1, b: 2, c: 3 }),
    [1, 2, 3],
    'extracts values to array'
  );

  t.deepEquals(
    values({}),
    [],
    'returns empty array if passed object is empty'
  );

  t.deepEquals(
    values(null),
    [],
    'returns empty array if passed value is null'
  );

  t.deepEquals(
    values(undefined),
    [],
    'returns empty array if passed value is undefined'
  );

  t.end();
});
