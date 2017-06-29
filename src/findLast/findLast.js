const iterator = require('../iterator/iterator');

function findLast(findLastFn, data) {
  for (let i = data.length; i >= 0; i -= 1) {
    const currentItem = data[i];

    if (findLastFn(currentItem, i)) {
      return currentItem;
    }
  }

  return undefined;
}

module.exports = iterator(findLast, 'findLast');
