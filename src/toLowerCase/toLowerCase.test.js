const test = require('tape-catch');
const toLowerCase = require('./toLowerCase');
const testUtils = require('../../testUtils');

test('N.toLowerCase', (t) => {
  testUtils.isCurried(t, toLowerCase());

  t.throws(
    () => toLowerCase(1),
    /N.toLowerCase received a non string argument/,
    'throws error if receives non string param'
  );

  t.equals(toLowerCase('NIER'), 'nier', 'converts all uppercase charachters to lower case');
  t.equals(toLowerCase('NieR'), 'nier', 'converts mixed charachters to lower case');
  t.equals(toLowerCase('nier'), 'nier', 'does not change lowercased string');

  t.end();
});
