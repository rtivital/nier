const test = require('tape-catch');
const reject = require('./reject');
const testUtils = require('../../testUtils');

test('reject', (t) => {
  testUtils.isCurried(t, reject(val => val > 2));
  testUtils.noIndex(t, { fn: reject, data: [1, 2, 3], result: [] });
  t.deepEquals(reject(val => val > 2, [1, 2, 3, 4]), [1, 2], 'filters array');

  t.end();
});
