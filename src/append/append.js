const curry = require('../curry/curry');

function append(element, array) {
  return [...array, element];
}

module.exports = curry(append);
