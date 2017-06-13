const test = require('tape');
const pipe = require('./pipe');

const mutiplyBy2 = value => value * 2;
const add1 = value => value + 1;
const divideBy3 = value => value / 3;

const pipeSingleArgument = pipe(
  mutiplyBy2, // вызывается первой
  add1, // вызывается второй
  divideBy3 // вызывается последней
); // эквивалентно –> (value) => mutiplyBy2(add1(divideBy3(value)))

const concat = (str1, str2) => `${str1} ${str2}`;
const upperFirst = str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
const upperLast = str => `${str.slice(0, str.length - 1)}${str.slice(str.length - 1).toUpperCase()}`;

const pipedDoubleArgument = pipe(
  concat, // вызывается первой
  upperFirst, // вызывается второй
  upperLast // вызывается последней
); // эквивалентно –> (value) => divideBy3(add1(mutiplyBy2(value)))

const undefinedToZero = value => (typeof value === 'undefined' ? 0 : value);
const getUndefined = () => undefined;
const pipedWithUndefinedReturn = pipe(
  getUndefined,
  undefinedToZero,
  add1
);

test('pipe', (t) => {
  // функция pipe должна вернуть ошибку,
  // если ей не было передано ни одного аргумента
  t.throws(
    () => pipe(),
    'throws error if argument is not passed'
  );

  // функция, созданная с помощью pipe должна работать с функциями,
  // принимающими один аргумент
  t.equals(
    pipeSingleArgument(1),
    divideBy3(add1(mutiplyBy2(1))),
    'works with single argument functions'
  );

  // функция, созданная с помощью pipe должна работать с функциями,
  // принимающими более одного аргумента
  t.equals(
    pipedDoubleArgument('hello', 'there'),
    upperFirst(upperLast(concat('hello', 'there'))),
    'works with functions that accept multiple arguments'
  );

  // функции, передаваемые в pipe дол
  t.equals(
    pipedWithUndefinedReturn(),
    add1(undefinedToZero(getUndefined())),
    'works with function that return falsy values'
  );

  t.end();
});
