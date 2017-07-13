const curry = require('../curry/curry');

function findIndex(callback, data) {
  for (let i = 0, l = data.length; i < l; i += 1) {
    const currentItem = data[i];

    if (callback(currentItem)) {
      return i;
    }
  }

  return -1;
}

module.exports = curry(findIndex);
