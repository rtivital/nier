const iterator = require('../iterator/iterator');

function find(findFn, data) {
  for (let i = 0, length = data.length; i < length; i += 1) {
    const currentItem = data[i];

    if (findFn(currentItem, i)) {
      return currentItem;
    }
  }

  return undefined;
}

module.exports = iterator(find, 'find');
