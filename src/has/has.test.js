const test = require('tape-catch');
const has = require('./has');
const testUtils = require('../../testUtils');

test('N.has', (t) => {
  testUtils.isCurried(t, has('nier'));

  t.false(has([], { a: 1 }), 'returns false if path is an empty array');
  t.false(has('', { a: 1 }), 'returns false if path is an empty string');
  t.false(has(null, { null: true }), 'returns false if path is null');
  t.false(has([null, 'hello'], { null: { hello: 'nier' } }), 'returns false if array path contains invalid types');

  t.true(has('nier', { nier: 1 }), 'returns true if valid string path was found in object');
  t.false(has('nier', { hello: 1 }), 'returns false if valid string path was not found in object');

  t.true(has(['hello', 'nier'], { hello: { nier: 1 } }), 'returns true if valid array path was found in object');
  t.false(has(['hello', 'nier'], { hello: 1 }), 'return false if valid array path was not found in object');

  t.true(has(2, [1, 2, 3]), 'returns true if path was found in array');
  t.false(has(500, [1, 2]), 'returns false if path was not found in array');

  t.true(
    has([0, 'hello', 'nier'], [{ hello: { nier: true } }]),
    'returns true if value is found in object nested in array'
  );

  t.false(has([0, 'hello', 'nier'], [{ hello: {} }]), 'returns false if value is not found in object nested in array');

  t.true(
    has(['hello', 'nier', 0], { hello: { nier: [1, 2] } }),
    'returns true if value is found in array nested in object'
  );

  t.false(
    has(['hello', 'nier', 0], { hello: { nier: false } }),
    'returns false if value is not found in array nested in object'
  );

  t.end();
});
