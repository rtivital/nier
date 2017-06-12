const test = require('tape');
const pipe = require('./pipe');

const mutiplyBy2 = value => value * 2;
const add1 = value => value + 1;
const divideBy3 = value => value / 3;

const piped = pipe(
  mutiplyBy2,
  add1,
  divideBy3
);

test('pipe', (t) => {
  t.equals(piped(1), 1, '1 equals 1');

  t.end();
});
