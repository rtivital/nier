module.exports = function noIndex(t, { fn, data, result }) {
  t.deepEquals(
    fn((_, index, array) => index === undefined && array === undefined, data),
    result,
    'does not provide index and data to callback'
  );
};
