const test = require('tape-catch');
const cloneArrayLike = require('./cloneArrayLike');

function cloneArguments() {
  return cloneArrayLike(arguments); // eslint-disable-line
}

test('_internal/cloneArrayLike', (t) => {
  t.deepEquals(
    cloneArrayLike([1, 2, 3]),
    [1, 2, 3],
    'clones array'
  );

  t.deepEquals(
    cloneArrayLike('nier'),
    ['n', 'i', 'e', 'r'],
    'chunks string into array'
  );

  t.deepEquals(
    cloneArguments(1, 2, 3),
    [1, 2, 3],
    'clones arguments list'
  );

  t.deepEquals(
    cloneArrayLike({ 0: 'hello', 1: 'world', length: 2 }),
    ['hello', 'world'],
    'transforms array like object to array'
  );

  t.end();
});
