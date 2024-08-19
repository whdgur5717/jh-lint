var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/auto.js
var require_auto = __commonJS({
  "src/auto.js"(exports2, module2) {
    module2.exports = {
      plugins: ["@jongh"],
      extends: ["plugin:@jongh/base"],
      overrides: [
        {
          files: ["**/*.ts?(x)"],
          extends: ["plugin:@jongh/ts"]
        },
        {
          files: ["**/*.{jsx,tsx}"],
          extends: ["plugin:@jongh/react"]
        },
        {
          files: ["**/*.tsx"],
          rules: {
            "react/prop-types": "off"
          }
        },
        {
          files: ["gatsby-node.{js,jsx,ts,tsx}"],
          env: {
            node: true,
            browser: false
          }
        },
        {
          files: ["gatsby-ssr.{js,jsx,ts,tsx}"],
          env: {
            node: true,
            browser: true,
            "shared-node-browser": true
          }
        },
        {
          files: ["gatsby-browser.{js,jsx,ts,tsx}"],
          env: {
            node: false,
            browser: true
          }
        }
      ]
    };
  }
});

// src/base.js
var require_base = __commonJS({
  "src/base.js"(exports2, module2) {
    module2.exports = {
      extends: ["plugin:import/errors", "eslint:recommended", "prettier"],
      plugins: ["json-format", "prettier", "simple-import-sort"],
      rules: {
        "prettier/prettier": [
          "error",
          {
            singleQuote: false,
            semi: false,
            tabWidth: 2,
            useTabs: false,
            trailingComma: "all",
            printWidth: 100,
            arrowParens: "always"
          }
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off"
      }
    };
  }
});

// src/react.js
var require_react = __commonJS({
  "src/react.js"(exports2, module2) {
    module2.exports = {
      plugins: ["react", "react-hooks/recommonded", "jsx-a11y"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    };
  }
});

// src/ts.js
var require_ts = __commonJS({
  "src/ts.js"(exports2, module2) {
    module2.exports = {
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            disallowTypeAnnotations: false
          }
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "all",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            ignoreRestSiblings: true
          }
        ]
      }
    };
  }
});

// index.js
var auto = require_auto();
var base = require_base();
var react = require_react();
var ts = require_ts();
module.exports = {
  configs: {
    auto,
    base,
    react,
    ts
  }
};
/*! For license information please see index.cjs.LEGAL.txt */
//# sourceMappingURL=index.cjs.map
