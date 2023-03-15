const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * Tailwind content when appDir will be exported
 * Roadmap: https://beta.nextjs.org/docs/app-directory-roadmap#configuration
 */
const _contentAppDir = ['./app/**/*.{ts, tsx}', './components/**/*.{ts, tsx}', '!app/**/*.test.{ts, tsx}']

/**
 * Tailwind content with pages directory
 */
const contentPagesDir = ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}']

/**
 * Tailwind Configuration File With DaisyUI
 * Docs: https://tailwindcss.com/docs/configuration
 * @type {import('tailwindcss').Config} - Tailwind Configuration
 */
const config = {
  content: contentPagesDir,
  plugins: [require('daisyui')],
  safelist: [{ pattern: /(bg|text)-.*/ }],
  theme: {
    fontFamily: {
      serif: ['Acme', ...defaultTheme.fontFamily.serif],
    },
  },
}

module.exports = config
