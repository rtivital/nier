const test = require('tape-catch');
const partial = require('./partial');

const sum = (...args) => args.reduce((acc, item) => item + acc, 0);
const concat = (str1, str2) => `${str1} ${str2}`;

test('partial', (t) => {
  t.throws(() => partial(), 'throws an error if function is not provided');

  t.equal(
    partial(sum, 1, 2, 3)(4, 5),
    sum(1, 2, 3, 4, 5),
    'works with functions that receive endless amount if arguments'
  );

  t.equal(
    partial(concat, 'hello')('world'),
    concat('hello', 'world'),
    'works with functions with two arguments'
  );

  t.equal(
    partial(concat, 'hello', 'world', '!')(),
    concat('hello', 'world', '!'),
    'do not applies extanereous arguments'
  );

  t.end();
});
