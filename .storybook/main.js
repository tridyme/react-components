module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: 'webpack5'
  },
  staticDirs: ['../public'],
  addons: ['@storybook/addon-controls'],
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ]
}