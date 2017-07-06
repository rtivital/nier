const test = require('tape-catch');
const trim = require('./trim');

test('trim', (t) => {
  t.throws(
    () => trim(),
    'throws error if receives non string param'
  );

  t.equals(
    trim('  \t  hello \n'),
    'hello',
    'trims all whitespace'
  );

  t.end();
});
