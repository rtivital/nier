const iterator = require('../iterator/iterator');

function reject(rejectFn, data) {
  const result = [];

  for (let i = 0, length = data.length; i < length; i += 1) {
    if (!rejectFn(data[i], i)) {
      result.push(data[i]);
    }
  }

  return result;
}

module.exports = iterator(reject, 'reject');
