const test = require('tape-catch');
const isPrimitive = require('./isPrimitive');

test('_internal/isPrimitive', (t) => {
  t.equals(isPrimitive(false), true, 'detects boolean as primitive');
  t.equals(isPrimitive(null), true, 'detects null as primitive');
  t.equals(isPrimitive(undefined), true, 'detects undefined as primitive');
  t.equals(isPrimitive('nier'), true, 'detects string as primitive');
  t.equals(isPrimitive(2), true, 'detects number as primitive');
  t.equals(isPrimitive(Symbol('nier')), true, 'detects symbol as primitive');

  t.equals(isPrimitive({}), false, 'detects object as not primitive');
  t.equals(isPrimitive([1, 2, 3]), false, 'detects array as not primitive');
  t.equals(isPrimitive(f => f), false, 'detects function as not primitive');

  t.end();
});
