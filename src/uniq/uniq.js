const curry = require('../curry/curry');
const includes = require('../includes/includes');

function uniq(array) {
  const result = [];

  for (let i = 0, l = array.length; i < l; i += 1) {
    const item = array[i];

    if (!includes(item, result)) {
      result.push(item);
    }
  }

  return result;
}

module.exports = curry(uniq);
