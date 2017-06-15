const curry = require('../curry/curry');

function prepend(element, array) {
  return [element, ...array];
}

module.exports = curry(prepend, 2);
