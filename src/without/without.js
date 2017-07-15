const curry = require('../curry/curry');
const includes = require('../includes/includes');

function without(remove, list) {
  const result = [];

  for (let i = 0, l = list.length; i < l; i += 1) {
    if (!includes(list[i], remove)) {
      result.push(list[i]);
    }
  }

  return result;
}

module.exports = curry(without);
