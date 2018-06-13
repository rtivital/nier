const test = require('tape-catch');
const clamp = require('./clamp');
const testUtils = require('../../testUtils');

test('clamp', (t) => {
  testUtils.isCurried(t, clamp(1, 3));
  t.throws(() => clamp(5, 1, 10), 'throws if provided boundaries are incorrect');
  t.equals(clamp(10, 20, 30), 20, 'clamps value to right side');
  t.equals(clamp(10, 20, 5), 10, 'clamps value to left side');
  t.equals(clamp(10, 20, 15), 15, 'does not clamp value if it is not requred');
  t.equals(clamp(4.5, 4.7, 4.8), 4.7, 'works with floats');

  t.end();
});
