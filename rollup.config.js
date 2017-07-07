// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'umd',
  moduleName: 'N',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
    }),

    commonjs(),
  ],
};
