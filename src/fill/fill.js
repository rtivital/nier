const curry = require('../curry/curry');


function fill(length, element) {
  const array = [];

  for (let i = 0; i < length; i += 1) {
    array.push(element);
  }

  return array;
}

module.exports = curry(fill);
