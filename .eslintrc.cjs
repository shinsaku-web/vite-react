module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', "import", "unused-imports"],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // or "no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", ["parent", "sibling"], "object", "type", "index"],
        // "newlines-between": "",
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "pathGroups": [
          // ここに書いた順序で間に1行空行をあけつつ整頓される
          { "pattern": "@/libs/**", "group": "internal", "position": "before" },
          { "pattern": "@/generated/**", "group": "internal", "position": "before" },
            // ... 省略
          { "pattern": "@/components/ui/**", "group": "internal", "position": "before" },

          // styles
          // 最後尾にしたいのでgroupをindex扱いにする
          { "pattern": "./**.module.css", "group": "index", "position": "before" },
        ]
      }
    ],
  },
  settings: {
    // TypeScript の import を eslint-import-resolver-typescript で解決
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  ignorePatterns: ['.eslintrc.cjs'],
};
