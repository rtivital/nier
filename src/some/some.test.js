const test = require('tape');
const some = require('./some');

const is2 = value => value === 2;
const is2Index = (value, index) => index === 2;
const someIs2 = some(is2);

test('some', (t) => {
  t.equal(
    some(is2, [1, 2, 3]),
    [1, 2, 3].some(is2),
    'works as regular some method'
  );

  t.equal(
    someIs2([1, 2, 3]),
    [1, 2, 3].some(is2),
    'supports curring'
  );

  t.equal(
    some(is2Index, true, [1, 2, 3]),
    [1, 2, 3].some(is2Index),
    'provides index value if it is required'
  );

  t.end();
});
