module.exports = {
  globals: {
    // 针对script-setup的编译宏的额外配置，此后可以不定义直接使用，不然的话eslint会报错，提示没有定义
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    defineProps: 'readonly',
    withDefaults: 'readonly'
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/no-mutating-props': 'off',
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0
    // 'vue/html-self-closing': 0,
    // 'spaced-comment': 1,
    // 'comma-dangle': 1,
    // 'prefer-const': 1,
    // 'no-prototype-builtins': 1
  },
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off'
      }
    }
  ]
}
