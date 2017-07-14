const test = require('tape-catch');
const toLowerCase = require('./toLowerCase');
const testUtils = require('../../testUtils');

test('toLowerCase', (t) => {
  testUtils.isCurried(t, toLowerCase());

  t.throws(
    () => toLowerCase(1),
    'throws error if receives non string param'
  );

  t.equals(
    toLowerCase('HeLlO'),
    'hello',
    'converts all charachters to toLowerCase'
  );

  t.equals(
    toLowerCase('hello'),
    'hello',
    'does not change lowercased string'
  );

  t.end();
});
