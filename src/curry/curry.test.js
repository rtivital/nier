const test = require('tape-catch');
const testUtils = require('../../testUtils');
const curry = require('./curry');

test.only('curry', (t) => {
  testUtils.isCurried(t, curry());
  testUtils.isCurried(t, curry((a, b) => a + b)(1), 'creates curried function');
  testUtils.isCurried(t, curry((...args) => args.reduce((acc, item) => acc + item, 0)), 'curries functions with zero arity');

  t.true(
    curry((a, b) => a + b).length === 2,
    'saves arity of passed function'
  );

  t.equals(
    curry((a, b, ...args) => a + b + args.reduce((acc, item) => acc + item, 0))(1)(2, 3, 4),
    10,
    'enables passing endless amount of arguments to the last call'
  );

  t.end();
});
