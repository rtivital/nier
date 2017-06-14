const test = require('tape');
const map = require('./map');

const multiplyBy2 = value => value * 2;
const multiplyByIndex = (value, index) => value * index;
const mapMultiply = map(multiplyBy2);

test('map', (t) => {
  t.deepEqual(
    map(multiplyBy2, [1, 2, 3]),
    [1, 2, 3].map(multiplyBy2),
    'works as regular map function'
  );

  t.deepEqual(
    mapMultiply([1, 2, 3]),
    [1, 2, 3].map(multiplyBy2),
    'supports curring'
  );

  t.deepEqual(
    map(multiplyByIndex, true, [1, 2, 3]),
    [1, 2, 3].map(multiplyByIndex),
    'passes index down when it isn required'
  );

  t.end();
});
