const test = require('tape-catch');
const flip = require('./flip');
const testUtils = require('../../testUtils');

test.only('flip', (t) => {
  testUtils.isCurried(t, flip());

  t.throws(
    () => flip(1),
    'trows error if provided argument is not a function'
  );

  t.equals(
    flip(() => 0)(),
    0,
    'does not change the behavior of function with no arguments'
  );

  t.equals(
    flip(name => `Hello, ${name}!`)('nier'),
    'Hello, nier!',
    'does not change the behavior of function with single argument'
  );

  t.equals(
    flip((str1, str2) => `${str1} ${str2}`)('nier!', 'Hello,'),
    'Hello, nier!',
    'flips function with two arguments'
  );

  t.equals(
    flip((str1, str2, str3) => `${str1} ${str2} ${str3}`)('nier!', 'there', 'Hello,'),
    'Hello, there nier!',
    'flips function with three arguments'
  );

  t.end();
});
