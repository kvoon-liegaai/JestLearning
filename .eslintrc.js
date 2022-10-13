module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names':"off",
    indent:"off",
    'object-curly-spacing':"off",
    quotes:'off',
    semi:'off',
    'key-spacing':'off',
    'space-before-function-paren':'off',
    'space-before-blocks':'off',
    'eol-last':'off',
    'comma-spacing':'off',
    "@typescript-eslint/ban-ts-comment":'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
