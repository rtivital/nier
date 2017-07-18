const test = require('tape-catch');
const testUtils = require('../../testUtils');
const partial = require('./partial');

test.only('partial', (t) => {
  testUtils.isCurried(t, partial(f => f));

  t.throws(() => partial(1, [2, 3]), 'throws an error if function is not provided');

  t.equals(
    partial((...args) => args.reduce((acc, item) => item + acc, 0), [1, 2, 3])(4, 5),
    15,
    'works with functions that receive endless amount if arguments'
  );

  t.equals(
    partial((str1, str2) => `${str1} ${str2}`, ['hello'])('world'),
    'hello world',
    'works with functions with two arguments'
  );

  t.equals(
    partial((str1, str2) => `${str1} ${str2}`, ['hello', 'world', '!'])(),
    'hello world',
    'does not apply extanereous arguments'
  );

  t.end();
});
