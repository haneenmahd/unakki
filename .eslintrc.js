export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-undefined": ["error", "always"],
    "no-var": ["error", "always"],
    "prefer-destructuring": ["error", "always"]
  },
  extends: "eslint:recommended",
};
