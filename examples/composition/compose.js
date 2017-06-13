const pipe = require('./pipe');

module.exports = function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return pipe(...fns.reverse());
};
