// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/no-useless-template-attributes': 'warn',
    'vue/html-self-closing': 'off',
    'vue/no-console': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/html-button-has-type': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/html-end-tags': 'error',
    'vue/require-prop-types': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/max-params': 'error',
    'vue/component-api-style': 'error',
    'vue/html-indent': 'error',
    'vue/require-v-for-key': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/attributes-order': 'error',
    'no-unused-vars': 'error',
  },
});
// Your custom configs here
