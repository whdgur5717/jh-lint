module.exports = {
  plugins: ["@jh"],
  extends: ["plugin:@jh/base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@jh/typescript"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@jh/react"],
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
