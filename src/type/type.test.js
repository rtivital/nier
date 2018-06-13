const test = require('tape-catch');
const type = require('./type');
const testUtils = require('../../testUtils');

test('N.type', (t) => {
  testUtils.isCurried(t, type());

  t.equals(type(undefined), 'Undefined', 'detects undefined type');
  t.equals(type(null), 'Null', 'detects null type');
  t.equals(type(1), 'Number', 'detects number type');
  t.equals(type('nier'), 'String', 'detects string type');
  t.equals(type('nier'), 'String', 'detects string type');
  t.equals(type(true), 'Boolean', 'detects boolean type');
  t.equals(type(Symbol('nier')), 'Symbol', 'detects symbol type');
  t.equals(type([]), 'Array', 'detects array type');
  t.equals(type({}), 'Object', 'detects object type');
  t.equals(type(f => f), 'Function', 'detects function type');
  t.equals(type(/nier/), 'RegExp', 'detects regexp type');
  t.equals(type(new Set()), 'Set', 'detects Set');
  t.equals(type(new Map()), 'Map', 'detects Map');
  t.equals(type(new Date()), 'Date', 'detects Date');

  t.end();
});
