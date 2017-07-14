const curry = require('../curry/curry');

function unnest(array) {
  if (!Array.isArray(array)) {
    throw new Error('N.unnest recieved data that is not an array');
  }

  const result = [];

  for (let i = 0, l = array.length; i < l; i += 1) {
    if (Array.isArray(array[i])) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

module.exports = curry(unnest);
