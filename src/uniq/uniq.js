module.exports = function uniq(array) {
  return [...(new Set(array))];
};
