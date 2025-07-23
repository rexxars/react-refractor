import {defineConfig} from '@sanity/pkg-utils'

export default defineConfig({
  dist: 'dist',

  extract: {
    rules: {
      // Disable rules for now
      'ae-incompatible-release-tags': 'off',
      'ae-internal-missing-underscore': 'off',
      'ae-missing-release-tag': 'off',
    },
  },
})
