const test = require('tape-catch');
const lowerCase = require('./lowerCase');
const testUtils = require('../../testUtils');

test('lowerCase', (t) => {
  testUtils.isCurried(t, lowerCase());

  t.throws(
    () => lowerCase(1),
    'throws error if receives non string param'
  );

  t.equals(
    lowerCase('HeLlO'),
    'hello',
    'converts all charachters to lowerCase'
  );

  t.equals(
    lowerCase('hello'),
    'hello',
    'does not change lowercased string'
  );

  t.end();
});
