module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'import/no-extraneous-dependencies': 'off',
      'class-methods-use-this': 'off',
      'eqeqeq': 'off',
      'object-curly-newline': 'off',
      'react/destructuring-assignment': 'off',
      'import/no-unresolved': 'off',
      'global-require': 'off'
    },
    'globals': {
      "fetch": false
    }
  }
