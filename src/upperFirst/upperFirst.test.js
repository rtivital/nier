const test = require('tape-catch');
const upperFirst = require('./upperFirst');
const testUtils = require('../../testUtils');

test('N.upperFirst', (t) => {
  testUtils.isCurried(t, upperFirst());

  t.throws(
    () => upperFirst(1),
    /N.upperFirst received a non string argument/,
    'throws error if receives non string param'
  );

  t.equals(upperFirst('nier'), 'Nier', 'converts first letter to upperCase');
  t.equals(upperFirst('Nier'), 'Nier', 'does not change string if inital letter was uppercased');
  t.equals(upperFirst('nIER'), 'NIER', 'does not change register of other letters');
  t.equals(upperFirst('!nier'), '!nier', 'does not change string if first charachter is not letter');

  t.end();
});
