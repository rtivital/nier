const test = require('tape');
const pipe = require('./pipe');

const mutiplyBy2 = value => value * 2;
const add1 = value => value + 1;
const divideBy3 = value => value / 3;

const pipeSingleArgument = pipe(
  mutiplyBy2, // will be called first
  add1, // will be called second
  divideBy3 // will be called last
); // equals to –> (value) => mutiplyBy2(add1(divideBy3(value)))

const concat = (str1, str2) => `${str1} ${str2}`;
const upperFirst = str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
const upperLast = str => `${str.slice(0, str.length - 1)}${str.slice(str.length - 1).toUpperCase()}`;

const pipedDoubleArgument = pipe(
  concat, // will be called first
  upperFirst, // will be called second
  upperLast // will be called last
); // equals to –> (value) => divideBy3(add1(mutiplyBy2(value)))

const undefinedToZero = value => (typeof value === 'undefined' ? 0 : value);
const getUndefined = () => undefined;
const pipedWithUndefinedReturn = pipe(
  getUndefined, // will be called first
  undefinedToZero, // will be called second
  add1 // will be called last
);

test('pipe', (t) => {
  // pipe function should throw an error if it has not received any arguments
  t.throws(
    () => pipe(),
    'throws error if argument is not passed'
  );

  // function created with pipe should work with functions that accept only one argument
  t.equals(
    pipeSingleArgument(1),
    divideBy3(add1(mutiplyBy2(1))),
    'works with single argument functions'
  );

  // function created with pipe should work with functions that accept multiple arguments
  t.equals(
    pipedDoubleArgument('hello', 'there'),
    upperFirst(upperLast(concat('hello', 'there'))),
    'works with functions that accept multiple arguments'
  );

  // pipe should be able to handle functions that return falsy values
  t.equals(
    pipedWithUndefinedReturn(),
    add1(undefinedToZero(getUndefined())),
    'works with function that return falsy values'
  );

  t.end();
});
