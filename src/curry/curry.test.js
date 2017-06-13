const test = require('tape');
const curry = require('./curry');

const sum = (...args) => args.reduce((acc, item) => item + acc, 0);
const getZero = () => 0;

test('curry', (t) => {
  t.throws(() => curry(), 'curry throws error if called without arguments');
  t.throws(() => curry(getZero), 'curry throws error if called with function with single arity');
  t.throws(() => curry(sum), 'curry throws error if called with function with endless arity');

  t.end();
});
