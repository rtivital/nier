const iterator = require('../iterator/iterator');

function map(mapFn, data) {
  const result = [];

  for (let i = 0, length = data.length; i < length; i += 1) {
    result.push(mapFn(data[i], i));
  }

  return result;
}

module.exports = iterator(map, 'map');
