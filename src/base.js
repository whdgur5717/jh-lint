module.exports = {
  extends: ["plugin:import/errors", "eslint:recommended"],
  plugins: ["json-format", "prettier", "simple-import-sort"],
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "import/no-unresolved": "off",
  "import/prefer-default-export": "off",
  "import/extensions": "off",
}
