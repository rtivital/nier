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

  t.equals(toLowerCase('HeLlO'), 'hello', 'converts all charachters to toLowerCase');

  t.equals(toLowerCase('hello'), 'hello', 'does not change lowercased string');

  t.end();
});
