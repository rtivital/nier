const test = require('tape');
const compose = require('./compose');

const mutiplyBy2 = value => value * 2;
const add1 = value => value + 1;
const divideBy3 = value => value / 3;
const concat = (str1, str2) => `${str1} ${str2}`;
const upperFirst = str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
const upperLast = str => `${str.slice(0, str.length - 1)}${str.slice(str.length - 1).toUpperCase()}`;
const undefinedToZero = value => (typeof value === 'undefined' ? 0 : value);
const getUndefined = () => undefined;

const composeSingleArgument = compose(
  divideBy3, // will be called last
  add1, // will be called second
  mutiplyBy2 // will be called first
); // equals to –> (value) => mutiplyBy2(add1(divideBy3(value)))

const composeDoubleArgument = compose(
  upperLast, // will be called last
  upperFirst, // will be called second
  concat // will be called first
); // equals to –> (value) => divideBy3(add1(mutiplyBy2(value)))

const composeWithFalsyReturn = compose(
  add1, // will be called first
  undefinedToZero, // will be called second
  getUndefined // will be called last
); // equals to –> () => add1(undefinedToZero(getUndefined()))

test('compose', (t) => {
  const singleArgumentTest = divideBy3(add1(mutiplyBy2(1)));
  const doubleArgumentTest = upperFirst(upperLast(concat('hello', 'there')));
  const falsyReturnTest = add1(undefinedToZero(getUndefined()));

  // compose functions should throw an error if it has not received any arguments
  t.throws(() => compose(), 'compose throws error if argument is not passed');

  // function created with compose should work with functions that accept only one argument
  t.equals(composeSingleArgument(1), singleArgumentTest, 'compose works with single argument functions');

  // function created with compose should work with functions that accept multiple arguments
  t.equals(composeDoubleArgument('hello', 'there'), doubleArgumentTest, 'compose works with functions that accept multiple arguments');

  // compose should be able to handle functions that return falsy values
  t.equals(composeWithFalsyReturn(), falsyReturnTest, 'compose works with function that return falsy values');

  t.end();
});
