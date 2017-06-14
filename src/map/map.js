const createIterator = require('../internal/createIterator');

function map(iterator, data) {
  const result = [];

  for (let i = 0, length = data.length; i < length; i += 1) {
    result.push(iterator(data[i], i));
  }

  return result;
}

module.exports = createIterator('map', map);
