import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      "no-unused-vars": "warn",  // Treat 'no-unused-vars' errors as warnings
      "no-console": "warn",      // Treat 'no-console' errors as warnings
      "no-undef": "warn",        // Treat 'no-undef' errors as warnings
      // Add other rules you want to treat as warnings here
    },
  },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-undef": "warn",
    },
  },
  pluginJs.configs.recommended, // Keep recommended settings, but override as needed
];
