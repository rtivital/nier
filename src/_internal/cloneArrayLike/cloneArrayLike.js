module.exports = function cloneArrayLike(array) {
  const result = [];

  for (let i = 0, l = array.length; i < l; i += 1) {
    result[i] = array[i];
  }

  return result;
};
