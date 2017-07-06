const test = require('tape-catch');
const isPrimitive = require('./isPrimitive');

test('_internal/isPrimitive', (t) => {
  t.true(isPrimitive(false), 'detects boolean as primitive');
  t.true(isPrimitive(null), 'detects null as primitive');
  t.true(isPrimitive(undefined), 'detects undefined as primitive');
  t.true(isPrimitive('nier'), 'detects string as primitive');
  t.true(isPrimitive(2), 'detects number as primitive');
  t.true(isPrimitive(Symbol('nier')), 'detects symbol as primitive');

  t.false(isPrimitive({}), 'detects object as not primitive');
  t.false(isPrimitive([1, 2, 3]), 'detects array as not primitive');
  t.false(isPrimitive(f => f), 'detects function as not primitive');

  t.end();
});
