class ArgumentError extends Error {
  constructor(message) {
    super();

    this.message = message;
    this.name = 'ArgumentError';
  }
}

module.exports = ArgumentError;
