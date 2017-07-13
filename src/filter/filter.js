const curry = require('../curry/curry');

function filter(callback, data) {
  const result = [];

  for (let i = 0, l = data.length; i < l; i += 1) {
    if (callback(data[i])) {
      result.push(data[i]);
    }
  }

  return result;
}

module.exports = curry(filter);
