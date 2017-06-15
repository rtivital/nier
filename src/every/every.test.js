const test = require('tape-catch');
const every = require('./every');

const is2 = value => value === 2;
const is2Index = (value, index) => index === 2;
const everyIs2 = every(is2);

test('every', (t) => {
  t.equal(
    every(is2, [2, 2, 3]),
    [2, 2, 3].every(is2),
    'works as regular every method'
  );

  t.equal(
    everyIs2([2, 2, 2]),
    [2, 2, 2].every(is2),
    'supports curring'
  );

  t.equal(
    every(is2Index, true, [2, 2, 3]),
    [2, 2, 3].every(is2Index),
    'provides index value if it is required'
  );

  t.end();
});
