const curry = require('../curry/curry');

function amount(callback, list) {
  let count = 0;

  for (let i = 0, l = list.length; i < l; i += 1) {
    if (callback(list[i])) {
      count += 1;
    }
  }

  return count;
}

module.exports = curry(amount);
