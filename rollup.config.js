import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'umd',
  moduleName: 'N',
  plugins: [
    babel(),
    nodeResolve({
      jsnext: true,
      main: true,
    }),

    commonjs(),
    uglify(),
  ],
};
