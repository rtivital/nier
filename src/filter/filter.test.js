const test = require('tape');
const filter = require('./filter');

const isEven = value => value % 2 === 0;
const indexGreaterThanZero = (value, index) => index > 0;
const filterEven = filter(isEven);
const filterByIndex = filter(indexGreaterThanZero, true);

test('filter', (t) => {
  t.throws(
    () => filter('hello'),
    'throws if first received argument is not a function'
  );

  t.equal(
    typeof filterEven,
    'function',
    'filter called with callback returns function'
  );

  t.deepEqual(
    filterEven([1, 2, 3]),
    [1, 2, 3].filter(isEven),
    'filtering works as regular filter method'
  );

  t.deepEqual(
    filter(parseInt, [2, 2, 2]),
    [2, 2, 2].filter(value => parseInt(value, 10)),
    'filter does not provide index by default'
  );

  t.deepEqual(
    filterByIndex([1, 2, 3]),
    [1, 2, 3].filter(indexGreaterThanZero),
    'filter function provides index when required'
  );

  t.end();
});
