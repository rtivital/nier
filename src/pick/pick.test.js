const test = require('tape-catch');
const testUtils = require('../../testUtils');
const pick = require('./pick');

test('N.pick', (t) => {
  testUtils.isCurried(t, pick([]));

  t.deepEquals(pick(['a', 'b'], { a: 1, b: 2, c: 3 }), { a: 1, b: 2 }, 'picks specified properties');
  t.deepEquals(pick(['a', 'b', 'd'], { a: 1, b: 2, c: 3 }), { a: 1, b: 2 }, 'ignores extraneous keys');
  t.deepEquals(pick([], { a: 1, b: 2, c: 3 }), {}, 'returns empty object if keys are not specified');

  t.end();
});
