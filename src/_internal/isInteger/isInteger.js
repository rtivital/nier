function isInteger(value) {
  return typeof value === 'number' && value % 1 === 0;
}

module.exports = isInteger;
