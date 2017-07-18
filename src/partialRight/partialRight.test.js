const test = require('tape-catch');
const testUtils = require('../../testUtils');
const partialRight = require('./partialRight');

const concat = (str1, str2) => `${str1} ${str2}`;

test('partialRight', (t) => {
  testUtils.isCurried(t, partialRight(f => f));

  t.throws(() => partialRight(1, [1]), 'throws an error if function is not provided');

  t.equals(
    partialRight((str1, str2) => `${str1} ${str2}`, ['world'])('hello'),
    'hello world',
    'works with functions with two arguments'
  );

  t.equals(
    partialRight(concat, ['hello', 'world', '!'])(),
    'hello world',
    'does not apply extanereous arguments'
  );

  t.end();
});
