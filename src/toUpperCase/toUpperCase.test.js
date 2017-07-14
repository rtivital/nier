const test = require('tape-catch');
const toUpperCase = require('./toUpperCase');
const testUtils = require('../../testUtils');

test('toUpperCase', (t) => {
  testUtils.isCurried(t, toUpperCase());

  t.throws(
    () => toUpperCase(1),
    'throws error if receives non string param'
  );

  t.equals(
    toUpperCase('hello'),
    'HELLO',
    'converts all charachters to uppercase'
  );

  t.end();
});
