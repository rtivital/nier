const test = require('tape-catch');
const curryN = require('./curryN');

test('N._internal/curryN', (t) => {
  t.equals(curryN(2, [], (...args) => args[0] + args[1]).length, 2, 'provides arity to curried function');

  t.equals(
    curryN(2, [], (...args) => args[0] + args[1])(1).length,
    1,
    'provides arity to function created with curried function call'
  );

  t.equals(
    curryN(2, [], (...args) => args[0] + args[1])()()()(1)()()(2),
    3,
    'enables endless function calling until arguments are received'
  );

  t.equals(
    curryN(2, [], (...args) => args[0] + args[1])(1, 2),
    3,
    'produced function works as expected with single call'
  );

  t.end();
});
