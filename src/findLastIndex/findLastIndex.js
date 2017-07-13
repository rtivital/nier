const curry = require('../curry/curry');

function findLastIndex(callback, data) {
  for (let i = data.length - 1; i > -1; i -= 1) {
    const currentItem = data[i];

    if (callback(currentItem)) {
      return i;
    }
  }

  return -1;
}

module.exports = curry(findLastIndex);
