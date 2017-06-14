const iterator = require('../iterator/iterator');

function filter(filterFn, data) {
  const result = [];

  for (let i = 0, length = data.length; i < length; i += 1) {
    if (filterFn(data[i], i)) {
      result.push(data[i]);
    }
  }

  return result;
}

module.exports = iterator(filter, 'filter');
