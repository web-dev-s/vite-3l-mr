// .storybook/monorepoTheme.js

import { ThemeVars, create } from '@storybook/theming'

export default create({
  // base: 'dark',

  colorPrimary: '#39EF79',
  colorSecondary: '#184126',

  // UI
  appBg: '#022D35',
  appContentBg: '#073B45',
  appBorderColor: '#BFBFBF',
  appBorderRadius: 2,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(0,0,0,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#0A282E',
  barBg: 'green',

  // Form colors
  inputBg: 'black',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'Demo UI - Design System',
  brandUrl: 'https://monorepo.demo.com',
  brandImage: './logo-big.png',
  brandTarget: '_self'
} as ThemeVars)
