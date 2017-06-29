const iterator = require('../iterator/iterator');

function findLastIndex(findLastIndexFn, data) {
  for (let i = data.length; i >= 0; i -= 1) {
    const currentItem = data[i];

    if (findLastIndexFn(currentItem, i)) {
      return i;
    }
  }

  return -1;
}

module.exports = iterator(findLastIndex, 'findLastIndex');
