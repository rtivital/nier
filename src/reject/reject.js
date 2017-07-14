const curry = require('../curry/curry');

function reject(callback, data) {
  const result = [];

  for (let i = 0, length = data.length; i < length; i += 1) {
    if (!callback(data[i])) {
      result.push(data[i]);
    }
  }

  return result;
}

module.exports = curry(reject);
