const test = require('tape-catch');
const iterator = require('./iterator');


function map(mapFn, data) {
  const result = [];

  for (let i = 0, length = data.length; i < length; i += 1) {
    result.push(mapFn(data[i], i));
  }

  return result;
}

const mapIterator = iterator(map);
const combineValueWithIndex = (a, index) => a + index;

test('iterator', (t) => {
  t.throws(
    () => iterator(),
    'throws if callback function was not provided'
  );

  t.throws(
    () => mapIterator(),
    'throws if created iterator has not received function during initialization'
  );

  t.equals(
    typeof mapIterator,
    'function',
    'returns function with provided iteratorFn'
  );

  t.deepEqual(
    mapIterator(combineValueWithIndex, true, [1, 2, 3]),
    [1, 2, 3].map(combineValueWithIndex),
    'creates valid iterator callback'
  );


  t.end();
});
