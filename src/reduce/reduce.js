const curry = require('../curry/curry');

function reduce(callback, initialValue, data) {
  let acc = initialValue;

  for (let i = 0, l = data.length; i < l; i += 1) {
    acc = callback(acc, data[i], i);
  }

  return acc;
}

module.exports = curry(reduce, 3);
