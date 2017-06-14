const iterator = require('../iterator/iterator');

function some(someFn, data) {
  for (let i = 0, length = data.length; i < length; i += 1) {
    if (someFn(data[i], i)) {
      return true;
    }
  }

  return false;
}

module.exports = iterator(some, 'some');
