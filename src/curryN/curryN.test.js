const test = require('tape-catch');
const testUtils = require('../../testUtils');
const curryN = require('./curryN');

test.only('curryN', (t) => {
  testUtils.isCurried(t, curryN(2));
  testUtils.isCurried(t, curryN(2, (a, b) => a + b), 'produces curried function');
  testUtils.isCurried(t, curryN(2, (a, b) => a + b)(1), 'produces curried function');

  t.true(
    curryN(2, (...args) => args[0] + args[1]).length === 2,
    'sets function arity'
  );

  t.equals(
    curryN(2, (...args) => args.reduce((acc, item) => acc + item, 0))(1)(2, 3),
    6,
    'enables passing endless amount of arguments to the last call'
  );

  t.end();
});
