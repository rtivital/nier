module.exports = function isNumber(number) {
  return typeof number === 'number' && !isNaN(number) && isFinite(number);
};
