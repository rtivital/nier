const curry = require('../curry/curry');

function map(callback, data) {
  const result = [];

  for (let i = 0, l = data.length; i < l; i += 1) {
    result.push(callback(data[i]));
  }

  return result;
}

module.exports = curry(map);
