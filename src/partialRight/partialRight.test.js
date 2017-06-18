const test = require('tape-catch');
const partialRight = require('./partialRight');

const concat = (str1, str2) => `${str1} ${str2}`;

test('partialRight', (t) => {
  t.throws(() => partialRight(), 'throws an error if function is not provided');

  t.equal(
    partialRight(concat, 'world')('hello'),
    concat('hello', 'world'),
    'works with functions with two arguments'
  );

  t.equal(
    partialRight(concat, 'hello', 'world', '!')(),
    concat('hello', 'world', '!'),
    'do not applies extanereous arguments'
  );

  t.end();
});
