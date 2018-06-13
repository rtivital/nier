const test = require('tape-catch');
const where = require('./where');
const testUtils = require('../../testUtils');

test('N.where', (t) => {
  testUtils.isCurried(t, where({}));

  t.true(where({})({ a: 1 }), 'returns true if predictates were not passed');
  t.false(where({ a: true })({ a: 1 }), 'returns false if any of predictates is not a function');
  t.true(where({ a: val => val === 1 })({ a: 1 }), 'returns true if passed predictate matches object');

  t.true(
    where({ a: val => val === 1, b: val => typeof val === 'string' })({ a: 1, b: 'nier' }),
    'returns true if all provided predictates match provided object'
  );

  t.false(
    where({ a: val => val === 1 })({ a: 2 }),
    'returns false if passed predictate does not match provided object'
  );

  t.false(
    where({ a: val => val === 1, b: val => typeof val === 'string' })({ a: 'hello', b: 'nier' }),
    'returns false if any predictate does not match the object'
  );

  t.end();
});
