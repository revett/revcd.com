module.exports = {
  root: true,
  env: {
    browser: true, // Specify environment as browser.
    es2020: true, // Use ECMAScript 2020 global variables.
  },
  extends: [
    "eslint:recommended", // Use recommended ESLint rules.
    "plugin:react/recommended", // Use recommended React rules.
    "plugin:react/jsx-runtime", // Include rules for React's JSX runtime.
    "plugin:react-hooks/recommended", // Use recommended rules for React hooks.
    "prettier", // Integrate Prettier for code styling.
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["import", "prettier", "react-refresh", "tailwindcss"],
  globals: {
    process: "readonly", // Allow using process.env.
  },
  rules: {
    // Rules for import plugin.
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "never",
        "alphabetize": { order: "asc", caseInsensitive: true },
      },
    ],
    "import/newline-after-import": "error",

    // Enforce always using parentheses around arrow function parameters for clarity.
    "arrow-parens": ["error", "always"],

    // Require braces in arrow function body to mimic Go's more explicit function syntax.
    "arrow-body-style": ["error", "always"],

    // Enforce the use of function expressions (const foo = function() {}) over declarations.
    "func-style": ["error", "expression"],

    // Require using arrow functions for callbacks.
    "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],

    // Ensure code style is consistent with Prettier formatting.
    "prettier/prettier": "error",

    // Custom rule for react-refresh plugin.
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

    // Additional rules to make the code feel more like Go.
    // Enforce consistent return statements.
    "consistent-return": "error",

    // Disallow unused variables for cleaner code.
    "no-unused-vars": "error",

    // Enforce using const or let over var, similar to Go's short variable declaration.
    "no-var": "error",
    "prefer-const": "error",
  },
}
