const test = require('tape-catch');
const toUpperCase = require('./toUpperCase');
const testUtils = require('../../testUtils');

test('N.toUpperCase', (t) => {
  testUtils.isCurried(t, toUpperCase());

  t.throws(
    () => toUpperCase(1),
    /N.toUpperCase received a non string argument/,
    'throws error if receives non string param'
  );

  t.equals(toUpperCase('nier'), 'NIER', 'converts all lowercase charachters to upper case');
  t.equals(toUpperCase('NieR'), 'NIER', 'converts mixed charachters to upper case');
  t.equals(toUpperCase('NIER'), 'NIER', 'does not change fully uppercased string');

  t.end();
});
