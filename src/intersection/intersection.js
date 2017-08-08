const curry = require('../curry/curry');
const includes = require('../includes/includes');

function intersection(a, b) {
  const result = [];

  for (let i = 0, l = a.length; i < l; i += 1) {
    if (includes(a[i], b)) {
      result.push(a[i]);
    }
  }

  return result;
}

module.exports = curry(intersection);
