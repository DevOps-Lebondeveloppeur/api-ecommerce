import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Use CommonJS syntax
      globals: {
        ...globals.node, // Allow Node.js globals like 'process' and 'require'
      },
    },
    rules: {
      // Turn all errors into warnings
      "no-unused-vars": "warn", // Change 'no-unused-vars' to a warning
      "no-console": "warn", // Example: Change 'no-console' to a warning
      "eqeqeq": "warn", // Example: Change 'eqeqeq' (strict equality) to a warning
      "semi": "warn", // Example: Change 'semi' rule to a warning
      "curly": "warn", // Example: Change 'curly' rule to a warning
      // Add other rules as needed
    },
  },
  pluginJs.configs.recommended, // Apply recommended ESLint JavaScript rules
];
