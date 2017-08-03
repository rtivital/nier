const curry = require('../curry/curry');

function flatten(list) {
  const result = [];

  for (let i = 0, l = list.length; i < l; i += 1) {
    if (Array.isArray(list[i])) {
      result.push(...flatten(list[i]));
    } else {
      result.push(list[i]);
    }
  }

  return result;
}

module.exports = curry(flatten);
