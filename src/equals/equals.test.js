const test = require('tape');
const equals = require('./equals');

const testFunction = f => f;

test('equals', (t) => {
  t.equals(typeof equals('nier'), 'function', 'is curried');

  t.true(equals('nier', 'nier'), 'detects equal strings');
  t.false(equals('hello', 'nier'), 'detects unequal strings');
  t.false(equals(1, '1'), 'detects unequal types with equal value');

  t.true(equals(1, 1), 'detects equal numbers');
  t.false(equals(1, 2), 'detects unequal numbers');
  t.true(equals(NaN, NaN), 'detects equal NaN values');
  t.true(equals(Infinity, Infinity), 'detects equal infinities');

  t.true(equals(null, null), 'detects equal null values');
  t.true(equals(undefined, undefined), 'detects equal undefined values');
  t.false(equals(null, undefined), 'detects unequal null and undefined values');

  t.true(equals(true, true), 'detects equal booleans');
  t.false(equals(true, false), 'detects unequal booleans');

  t.false(equals({}, 1), 'detects unequal primitive and object');
  t.false(equals(1, {}), 'detects unequal object and primitive');

  t.true(equals({}, {}), 'detects equal empty objects');
  t.true(equals({ a: 1 }, { a: 1 }), 'detects equal non empty objects');
  t.false(equals({}, { a: 1 }), 'detects unequal objects');

  t.true(equals([], []), 'detects equal empty arrays');
  t.true(equals([1, 2], [1, 2]), 'detects empty non empty arrays');
  t.false(equals([], [1, 2]), 'detects unequal arrays');

  t.true(equals([[1], [2]], [[1], [2]]), 'detects deeply equal nested array of arrays');
  t.false(equals([[1], [2]], [[1], [3]]), 'detects deeply unequal nested array of arrays');

  t.true(equals({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } }), 'detects deeply equal objects');
  t.false(equals({ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }), 'detects deeply unequal objects');

  t.true(equals([{ a: { b: 1 } }], [{ a: { b: 1 } }]), 'detects deeply equal nested arrays of objects');
  t.false(equals([{ a: { b: 1 } }], [{ a: { b: 2 } }]), 'detects deeply unequal nested arrays of objects');

  t.true(equals({ a: { b: [{ c: 3 }, { d: 1 }] } }, { a: { b: [{ c: 3 }, { d: 1 }] } }), 'detects deeply equal nested object in array');
  t.false(equals({ a: { b: [{ c: 3 }] } }, { a: { b: [{ c: 4 }, { d: 1 }] } }), 'detects deeply unequal nested object in array');

  t.true(equals(testFunction, testFunction), 'detects equal functions');
  t.false(equals(testFunction, f => f), 'detects unequal functions');

  t.end();
});
