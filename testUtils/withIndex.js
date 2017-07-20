const withIndex = require('../src/withIndex/withIndex');

module.exports = function withIndexTest(t, { fn, data, indexResult, dataResult }) {
  t.deepEquals(
    withIndex(fn)((val, index) => index, data),
    indexResult,
    'enables withIndex module index passing'
  );

  t.deepEquals(
    withIndex(fn)((val, index, array) => array, data),
    dataResult,
    'enables withIndex module array passing'
  );
};
