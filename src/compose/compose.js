const reverse = require('../reverse/reverse');
const pipe = require('../pipe/pipe');

module.exports = function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose requires at least one function argument');
  }

  return pipe(...reverse(fns));
};
