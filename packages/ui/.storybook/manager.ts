// .storybook/manager.js

import { addons } from '@storybook/addons'
import monorepoTheme from './monorepoTheme'
import './titleAddon'

addons.setConfig({
  theme: monorepoTheme
})
