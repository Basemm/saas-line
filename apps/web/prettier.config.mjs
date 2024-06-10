import prettierConfig from '@repo/prettier-config' assert { type: 'json' }

export default {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
}
