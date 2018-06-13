const N = require('../src/');

module.exports = function withIndex(t, { fn, data, indexResult, dataResult }) {
  t.deepEquals(N.withIndex(fn)((val, index) => index, data), indexResult, 'enables withIndex module index passing');

  t.deepEquals(
    N.withIndex(fn)((val, index, array) => array, data),
    dataResult,
    'enables withIndex module array passing'
  );
};
