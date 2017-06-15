const test = require('tape-catch');
const lowerCase = require('./lowerCase');

test('lowerCase', (t) => {
  t.throws(
    () => lowerCase(),
    'throws error if receives non string param'
  );

  t.equal(
    lowerCase('HELLO'),
    'hello',
    'converts all charachters to lowerCase'
  );

  t.end();
});
