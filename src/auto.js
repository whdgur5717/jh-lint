module.exports = {
  plugins: ["@jongh"],
  extends: ["plugin:@jongh/base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@jongh/ts"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@jongh/react"],
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
    {
      files: ["gatsby-node.{js,jsx,ts,tsx}"],
      env: {
        node: true,
        browser: false,
      },
    },
    {
      files: ["gatsby-ssr.{js,jsx,ts,tsx}"],
      env: {
        node: true,
        browser: true,
        "shared-node-browser": true,
      },
    },
    {
      files: ["gatsby-browser.{js,jsx,ts,tsx}"],
      env: {
        node: false,
        browser: true,
      },
    },
  ],
}
