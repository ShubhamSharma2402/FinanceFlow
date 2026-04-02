/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  settings: { react: { version: "detect" } },
  ignorePatterns: ["dist", "node_modules", ".history"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
