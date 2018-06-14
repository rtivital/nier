class ArgumentError extends Error {
  constructor({ functionName, argumentPosition, expectedType, valueType }) {
    const message = `${functionName} expected argument at position \`${argumentPosition}\` to have type: \`${expectedType}\`, instead got: \`${valueType}\``;

    super(message);

    this.message = message;
    this.name = 'ArgumentError';
  }
}

module.exports = ArgumentError;
