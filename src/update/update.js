const curry = require('../curry/curry');

function update(index, value, array) {
  const { length } = array;
  const size = length - 1;

  if (size < index) {
    return array;
  }

  const indexToUpdate = index < 0 ? size + index : index;
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
