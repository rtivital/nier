const test = require('tape-catch');
const curryN = require('./curryN');

test('_internal/curryN', (t) => {
  curryN(2, [], (...args) => args[0] + args[1])();
  t.equals(
    curryN(2, [], (...args) => args[0] + args[1]).length,
    2,
    'provides arity to curried function'
  );

  t.equals(
    curryN(2, [], (...args) => args[0] + args[1])(1).length,
    1,
    'provides arity to function created with curried function call'
  );

  t.end();
});
