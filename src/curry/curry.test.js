const test = require('tape-catch');
const curry = require('./curry');

const sum = (...args) => args.reduce((acc, item) => item + acc, 0);
const curriedSum = curry(sum, 2);
const curriedSumWithZeroArity = curry(sum);
const concat = (str1, str2) => `${str1} ${str2}`;
const curriedConcat = curry(concat);

test('curry', (t) => {
  t.throws(() => curry(), 'curry throws error if called without arguments');

  t.equal(
    curriedSum(1)(2),
    sum(1, 2),
    'curries function with specificified arity',
  );

  t.equal(
    curriedConcat('hello')('there'),
    concat('hello', 'there'),
    'curries function based on its arity'
  );

  t.equal(
    curriedSumWithZeroArity(1, 2, 3),
    sum(),
    'curries zero arity function with single call without provinding any arguments'
  );

  t.end();
});
