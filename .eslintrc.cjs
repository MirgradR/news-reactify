module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:eslint-plugin-import/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite-env.d.ts", "vite.config.ts"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      typescript: { alwaysTryTypes: true, project: "./tsconfig.json" },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          { pattern: "react", group: "builtin" },
          { pattern: "vite", group: "builtin" },
          { pattern: "@/shared/**", group: "internal" },
          { pattern: "@/entities/**", group: "internal" },
          { pattern: "@/features/**", group: "internal" },
          { pattern: "@/widgets/**", group: "internal" },
          { pattern: "@/pages/**", group: "internal" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: [
              "@/shared/*/*/**",
              "@/entities/*/**",
              "@/features/*/**",
              "@/widgets/*/**",
              "@/pages/*/**",
              "@/app/**",
            ],
            message:
              "Direct access to the internal parts of the module is prohibited",
          },
          {
            group: [
              "../**/shared",
              "../**/entities",
              "../**/features",
              "../**/widgets",
              "../**/pages",
              "../**/app",
            ],
            message: "Prefer absolute imports instead of relatives",
          },
        ],
      },
    ],
  },
};
