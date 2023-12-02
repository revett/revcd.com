module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module', // Specifies that we are using ES6 module imports.
    ecmaFeatures: {
      jsx: true, // Enables ESLint to understand JSX syntax.
    },
  },
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use .prettierrc file.
  },
};
