const test = require('tape-catch');
const values = require('./values');
const testUtils = require('../../testUtils');

test('N.values', (t) => {
  testUtils.isCurried(t, values());

  t.throws(() => values(null), /N.values received a non object argument/, 'throws if receives null');
  t.throws(() => values(undefined), /N.values received a non object argument/, 'throws if receives undefined');

  t.deepEquals(values({ a: 1, b: 2, c: 3 }), [1, 2, 3], 'extracts values to array');
  t.deepEquals(values({}), [], 'returns empty array if passed object is empty');

  t.end();
});
