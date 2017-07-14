const test = require('tape-catch');
const flip = require('./flip');

const getZero = () => 0;
const greet = name => `Hello, ${name}`;
const concat = (str1, str2) => `${str1} ${str2}`;
const concat3 = (str1, str2, str3) => `${str1} ${str2} ${str3}`;

test('flip', (t) => {
  t.throws(
    () => flip(1),
    'trows error if provided argument is not a function'
  );

  t.equals(
    flip(getZero)(),
    getZero(),
    'does not change the behavior of function with no arguments'
  );

  t.equals(
    flip(greet)('John'),
    greet('John'),
    'does not change the behavior of function with single argument'
  );

  t.equals(
    flip(concat)('world', 'hello'),
    concat('hello', 'world'),
    'flips function with two arguments'
  );

  t.equals(
    flip(concat3)('!', 'world', 'hello'),
    concat3('hello', 'world', '!'),
    'flips function with three arguments'
  );

  t.end();
});
