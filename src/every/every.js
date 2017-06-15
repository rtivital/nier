const iterator = require('../iterator/iterator');

function every(everyFn, data) {
  for (let i = 0, length = data.length; i < length; i += 1) {
    if (!everyFn(data[i], i)) {
      return false;
    }
  }

  return true;
}

module.exports = iterator(every, 'every');
