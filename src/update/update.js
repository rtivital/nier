const curry = require('../curry/curry');
const has = require('../has/has');

function update(index, value, array) {
  const { length } = array;
  const indexToUpdate = index < 0 ? length + index : index;

  if (!has(`${indexToUpdate}`, array)) {
    return array;
  }

  const result = [];

  for (let i = 0; i < length; i += 1) {
    if (i === indexToUpdate) {
      result[i] = value;
    } else {
      result[i] = array[i];
    }
  }

  return result;
}

module.exports = curry(update);
