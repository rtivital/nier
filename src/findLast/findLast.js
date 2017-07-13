const curry = require('../curry/curry');

function findLast(callback, data) {
  for (let i = data.length; i > -1; i -= 1) {
    const currentItem = data[i];

    if (callback(currentItem)) {
      return currentItem;
    }
  }

  return undefined;
}

module.exports = curry(findLast);
