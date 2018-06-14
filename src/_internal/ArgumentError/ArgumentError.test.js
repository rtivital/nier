const test = require('tape-catch');
const ArgumentError = require('./ArgumentError');

test('N._internal/ArgumentError', (t) => {
  const argumentError = new ArgumentError(
    'N._internal/ArgumentError expected argument at position `1` to have type: `String`, instead got: `Number`'
  );

  t.equals(
    argumentError.message,
    'N._internal/ArgumentError expected argument at position `1` to have type: `String`, instead got: `Number`',
    'generates valid message'
  );

  t.equals(
    argumentError.toString(),
    'ArgumentError: N._internal/ArgumentError expected argument at position `1` to have type: `String`, instead got: `Number`',
    'provides error type with toString method'
  );

  t.end();
});
