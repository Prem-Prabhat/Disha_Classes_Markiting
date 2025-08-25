/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'react/jsx-key': 'off'
  }
};

