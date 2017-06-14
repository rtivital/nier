const createIterator = require('../internal/createIterator');

function some(iterator, data) {
  for (let i = 0, length = data.length; i < length; i += 1) {
    if (iterator(data[i], i)) {
      return true;
    }
  }

  return false;
}

module.exports = createIterator('some', some);
