const test = require('tape-catch');
const reduce = require('./reduce');

const sum = (acc, item) => item + acc;
const sumIndex = (acc, _, index) => acc + index;

test('reduce', (t) => {
  t.equals(
    typeof reduce(sum, 0),
    'function',
    'is curried'
  );

  t.equals(
    reduce(sum, 0, [1, 2, 3, 4, 5]),
    [1, 2, 3, 4, 5].reduce(sum, 0),
    'works as regular reduce method'
  );

  t.equals(
    reduce(sumIndex, 0, [1, 2, 3, 4, 5]),
    [1, 2, 3, 4, 5].reduce(sumIndex, 0),
    'always provides index value'
  );

  t.end();
});
