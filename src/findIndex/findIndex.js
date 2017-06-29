const iterator = require('../iterator/iterator');

function findIndex(findIndexFn, data) {
  for (let i = 0, length = data.length; i < length; i += 1) {
    const currentItem = data[i];

    if (findIndexFn(currentItem, i)) {
      return i;
    }
  }

  return -1;
}

module.exports = iterator(findIndex, 'findIndex');
