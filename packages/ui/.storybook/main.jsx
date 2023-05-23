// .storybook/main.js
const svgr = require('vite-plugin-svgr').default

module.exports = {
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins = [
      ...config.plugins,
      svgr({
        svgrOptions: {
          icon: true
        }
      })
    ]

    // return the customized config
    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  staticDirs: ['./public'],
  typescript: {
    reactDocgen: 'react-docgen'
  }
}
