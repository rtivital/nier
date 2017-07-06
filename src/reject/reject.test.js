const test = require('tape-catch');
const reject = require('./reject');
const complement = require('../complement/complement');

const isEven = value => value % 2 === 0;
const indexGreaterThanZero = (value, index) => index > 0;
const rejectEven = reject(isEven);
const rejectByIndex = reject(indexGreaterThanZero, true);

test('reject', (t) => {
  t.equals(
    typeof rejectEven,
    'function',
    'reject called with callback returns function'
  );

  t.deepEquals(
    rejectEven([1, 2, 3]),
    [1, 2, 3].filter(complement(isEven)),
    'rejecting works as regular reject method'
  );

  t.deepEquals(
    rejectByIndex([1, 2, 3]),
    [1, 2, 3].filter(complement(indexGreaterThanZero)),
    'reject function provides index when required'
  );

  t.end();
});
