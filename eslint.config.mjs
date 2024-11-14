import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],  // Apply to all JS files
    languageOptions: {
      sourceType: "commonjs", // Change this to "module" if you're using ES modules
      globals: {
        ...globals.node, // Use Node.js globals
      },
    },
    rules: {
      "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      "no-console": "warn",      // Treat 'no-console' errors as warnings
      "no-undef": "warn",        // Treat 'no-undef' errors as warnings
    },
  },
  {
    languageOptions: {
      globals: globals.browser, // This is for browser-specific globals (if you need browser code)
    },
    rules: {
      "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      "no-console": "warn",
      "no-undef": "warn",
    },
  },
  pluginJs.configs.recommended, // Keep recommended settings, but override as needed
];
