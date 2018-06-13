const test = require('tape-catch');
const arity = require('./arity');

const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

test('N._internal/arity', (t) => {
  t.equals(arity(1, sum).length, 1, 'provides arity to function');
  t.equals(arity(34, sum).length, 34, 'provides arity to function');
  t.equals(arity(2, sum)(1, 2, 3, 4), 10, 'returned function works as regular');

  t.equals(arity(2, sum).name, 'sum', 'sets right function name');
  t.equals(arity(2, (a, b) => a + b).name, 'arityN', 'sets default name for anonimus functions');

  t.throws(() => arity('string length', sum)(1, 2, 3), 'throws with string length');
  t.throws(() => arity(null, sum)(1, 2, 3), 'throws with null length');
  t.throws(() => arity(-1, sum)(1, 2, 3), 'throws with negative length');

  t.end();
});
