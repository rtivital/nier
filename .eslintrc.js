module.exports = {
  extends: 'airbnb-base',
  plugins: ['filenames'],
  rules: {
    'filenames/match-exported': 'error',
    'filenames/no-index': 'error',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'error',
    'global-require': 'off',
    'max-len': ['error', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
  },
};
