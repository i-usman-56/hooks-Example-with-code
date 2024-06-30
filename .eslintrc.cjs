module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'always' }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'error', // Disallow console statements
    'no-debugger': 'error', // Disallow debugger statements
    'react/prop-types': 'error', // Enforce prop type definitions
    'react/react-in-jsx-scope': 'off', // Not necessary with React 17+
  },
};

// Note: To enforce strict linting and prevent users from proceeding with issues, 
// you can set up a pre-commit hook using a tool like Husky and lint-staged.

