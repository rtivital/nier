const test = require('tape');
const pipe = require('./pipe');

const mutiplyBy2 = value => value * 2;
const add1 = value => value + 1;
const divideBy3 = value => value / 3;
const pipeSingleArgument = pipe(
  mutiplyBy2,
  add1,
  divideBy3
);

const concat = (str1, str2) => `${str1} ${str2}`;
const upperFirst = str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
const upperLast = str => `${str.slice(0, str.length - 1)}${str.slice(str.length - 1).toUpperCase()}`;
const pipedDoubleArgument = pipe(
  concat,
  upperFirst,
  upperLast
);

test('pipe', (t) => {
  t.equals(pipeSingleArgument(1), 1, 'works with single argument functions');
  t.equals(pipedDoubleArgument('hello', 'there'), 'Hello therE', 'workds with functions that accept multiple arguments');

  t.end();
});
