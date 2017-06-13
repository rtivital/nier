const test = require('tape');
const pipe = require('./pipe');

const mutiplyBy2 = value => value * 2;
const add1 = value => value + 1;
const divideBy3 = value => value / 3;
const concat = (str1, str2) => `${str1} ${str2}`;
const upperFirst = str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
const upperLast = str => `${str.slice(0, str.length - 1)}${str.slice(str.length - 1).toUpperCase()}`;
const undefinedToZero = value => (typeof value === 'undefined' ? 0 : value);
const getUndefined = () => undefined;

const pipeSingleArgument = pipe(
  mutiplyBy2, // will be called first
  add1, // will be called second
  divideBy3 // will be called last
); // equals to –> (value) => mutiplyBy2(add1(divideBy3(value)))

const pipeDoubleArgument = pipe(
  concat, // will be called first
  upperFirst, // will be called second
  upperLast // will be called last
); // equals to –> (value) => divideBy3(add1(mutiplyBy2(value)))

const pipeWithFalsyReturn = pipe(
  getUndefined, // will be called first
  undefinedToZero, // will be called second
  add1 // will be called last
); // equals to –> () => add1(undefinedToZero(getUndefined()))

test('pipe', (t) => {
  const singleArgumentTest = divideBy3(add1(mutiplyBy2(1)));
  const doubleArgumentTest = upperFirst(upperLast(concat('hello', 'there')));
  const falsyReturnTest = add1(undefinedToZero(getUndefined()));

  // pipe functions should throw an error if it has not received any arguments
  t.throws(() => pipe(), 'pipe throws error if argument is not passed');

  // function created with pipe should work with functions that accept only one argument
  t.equals(pipeSingleArgument(1), singleArgumentTest, 'pipe works with single argument functions');

  // function created with pipe should work with functions that accept multiple arguments
  t.equals(pipeDoubleArgument('hello', 'there'), doubleArgumentTest, 'pipe works with functions that accept multiple arguments');

  // pipe should be able to handle functions that return falsy values
  t.equals(pipeWithFalsyReturn(), falsyReturnTest, 'pipe works with function that return falsy values');

  t.end();
});
