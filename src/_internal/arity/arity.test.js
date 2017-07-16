const test = require('tape-catch');
const arity = require('./arity');

const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

test('_internal/arity', (t) => {
  t.equals(
    arity(2, sum).length,
    2,
    'provides arity to function'
  );

  t.equals(
    arity(53, sum).length,
    53,
    'provides arity to function'
  );

  t.equals(
    arity(2, sum)(1, 2, 3, 4),
    10,
    'returned function works as regular'
  );

  t.end();
});
